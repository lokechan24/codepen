import { GoogleAuthProvider,GithubAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth"
import { auth } from "../config/firebase.config"

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).then(userCred => {
        window.location.reload()
    });
};

export const signInWithGitHub = async () => {
    await signInWithPopup(auth, githubProvider).then(userCred => {
        window.location.reload()
    });
};