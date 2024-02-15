import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import UserAuthInput from "../components/UserAuthInput"; 
import { FaEnvelope, FaEye, FaGithub } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc"; 
import { MdPassword } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { signInWithGitHub, signInWithGoogle } from "../utils/helpers";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { fadeInOut } from "../animations";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [getEmailValidationStatus, setGetEmailValidationStatus] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const createNewUser = async () => {
        if(getEmailValidationStatus) {
            await createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
                if(userCred) {
                    console.log(userCred);
                }
            })
            .catch((err) => console.log(err));
        }
    };

    const loginWithEmailPassword = async () => {
        if(getEmailValidationStatus) {
            await signInWithEmailAndPassword(auth, email, password).then((userCred) => {
                if(userCred) {
                    console.log(userCred);
                }
            })
            .catch((err) => {
                console.log(err.message);
                if(err.message.includes("user-not-found")){
                    setAlert(true);
                    setAlertMsg("Invalid Id : User Not Found");
                }
                else if(err.message.includes("wrong-password")){
                    setAlert(true);
                    setAlertMsg("Password Mismatch");
                }
                else{
                    setAlert(true);
                    setAlertMsg("Temporarily disabled due to many failed login");
                }
                setInterval(() => {
                    setAlert(false);
                }, 4000);
            });
        }
    };

    return (
        <div className="w-full py-6">
            <img
                src={Logo}
                className="object-contain w-32 opacity-50 h-auto"
                alt="logo" />

            <div className="w-full flex flex-col items-center justify-center py-8">
                <p className="py-12 text-2xl text-primaryText">Join With Us</p>

                <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">

                    {/* email */}
                    <UserAuthInput
                        label="Email"
                        placeholder="Email"
                        isPass={false}
                        key="Email"
                        setStateFunction={setEmail}
                        Icon={FaEnvelope}
                        getEmailValidationStatus={setGetEmailValidationStatus} // Fixed prop name
                    />

                    {/* password */}
                    <UserAuthInput
                        label="Password"
                        placeholder="Password"
                        isPass={true}
                        key="Password"
                        setStateFunction={setPassword}
                        Icon={MdPassword}
                    />

                    {/* alert section */}

                    <AnimatePresence>
                        {alert && (
                            <motion.p 
                            key={"AlertMessage"}
                            {...fadeInOut}
                            className="text-red-500"
                            >
                                {alertMsg}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    {/* login button */}
                    {!isLogin ? (
                        <motion.div 
                        onClick={createNewUser}
                        whileTap={{ scale: 0.9 }} className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500">
                        <p className="text-xl text-white">Sign Up</p>
                    </motion.div>
                    ) : (
                        <motion.div 
                        onClick={loginWithEmailPassword}
                        whileTap={{ scale: 0.9 }} className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500">
                        <p className="text-xl text-white">Login</p>
                    </motion.div>
                    )}

                    {/* account text section */}

                    
                    {!isLogin ? (
                        <p className="text-sm text-primarytext flex items-center justify-center gap-3">Already have an account!{" "} 
                        <span onClick={() => setIsLogin(!isLogin)} className="text-emerald-500 cursor-pointer">Login Here</span></p>
                    ) : (
                        <p className="text-sm text-primarytext flex items-center justify-center gap-3">Doesn't have an account!{" "}
                        <span onClick={() => setIsLogin(!isLogin)} className="text-emerald-500 cursor-pointer">Create Here</span></p>
                    )}

                    {/* or section */}

                    <div className="flex items-center justify-center gap-12">
                        <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
                        <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
                        <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
                    </div>

                    {/* sign in with google */}

                    <motion.div onClick={signInWithGoogle} 
                    className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full h-[50px] rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer" whileTap={{scale:0.9}}>
                        <FcGoogle className="text-3xl"/>
                        <p className="text-xl text-white">Sign in with Google</p>
                    </motion.div>

                    {/* or section */}

                    <div className="flex items-center justify-center gap-12">
                        <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
                        <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
                        <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
                    </div>

                    {/* sign in with github */}
                    <motion.div onClick={signInWithGitHub} 
                    className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full h-[50px] rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer" whileTap={{scale:0.9}}>
                        <FaGithub className="text-3xl"/>
                        <p className="text-xl text-white">Sign in with Git Hub</p>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default SignUp;
