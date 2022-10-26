
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config.init';
import{getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { useEffect } from 'react';

export const AuthContext = createContext();
 const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user,setUser] = useState({});

   const providerLogin = (provider) =>{
    return signInWithPopup(auth,provider);
   }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log("inside auth state change",currentUser);
        setUser(currentUser)
    });
    return()=>{
        unsubscribe();
    }
   },[]) 

   const authInfo ={user,providerLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;