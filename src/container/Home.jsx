import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { MdHome } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Home = () => {
    const [isSideMenu, setSideMenu] = useState(false);
    const [user, setUser] = useState(["loke"]);
    return <>
        <div className={`w-2 ${isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-500 ease-in-out`}>

            {/* Anchor section */}
            <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() => setSideMenu(!isSideMenu)}
                className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer">
                <HiChevronDoubleLeft className="text-white text-xl" />
            </motion.div>

            <div className="overflow-hidden w-full flex flex-col gap-4">
                {/* Logo */}
                <Link to={"/home"}>
                    <img src={Logo} alt="Logo" className="object-contain w-72 h-auto" />
                </Link>
                {/* Start coding */}

                <Link to={"/newProject"}>
                    <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200">
                        <p className="text-gray-400 group-hover:text-gray-200 capitalize">start coding</p>
                    </div>
                </Link>

                {/* Home nav */}

                {user && (
                    <Link to={"/home/projects"} className="flex items-center justify-center gap-6">
                        <MdHome className="text-primaryText text-xl" />
                        <p className="text-lg text-primaryText">Home</p>
                    </Link>
                )}
            </div>
        </div>
        <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px12 py-4 md:py-12">
            {/* top section */}
        </div>
    </>
};

export default Home;