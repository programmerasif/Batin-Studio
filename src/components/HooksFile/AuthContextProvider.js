import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const adminEmail = "mattrixshakhawat@gmail.com"



    const createUserr = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            setLoading(false)
            return unsubscribe();
        }
    }, [])

    const logInOut = () => {
        setUser(null)
        signOut(auth)
    }

    const authUser = {
        user: user,
        createUserr,
        userLogin,
        loading: loading,
        logInOut,
        adminEmail
    }

    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;