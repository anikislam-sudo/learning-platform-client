
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config.init';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useEffect } from 'react';

export const AuthContext = createContext();
 const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const[loading,setLoading] = useState(true);

   const providerLogin = (provider) =>{
    return signInWithPopup(auth,provider);
    setLoading(true);
   }
   const logOut =()=>{
    return signOut(auth);
    setLoading(true);
}
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
    setLoading(true);
}
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
}

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log("inside auth state change",currentUser);
        setUser(currentUser)
        setLoading(false);
    });
    return()=>{
        unsubscribe();
    }
   },[]) 

   const authInfo ={user,providerLogin,logOut,createUser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;