/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const githubSign = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const profileUpdate = (name,photoUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: photoUrl
        })
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    },[])

    const authInfo = {user,loading,createUser,signIn,logOut,googleSign,githubSign,profileUpdate}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;