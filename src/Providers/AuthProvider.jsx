import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [users , setUsers] = useState(null)
    const [loader,setLoader] = useState(true)
    const createUser = ( email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = ( email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUsers(currentUser);
        console.log('current user',currentUser);
        setLoader(false)
    });
    return ()=>{
        return unsubscribe()
    }
   },[])
    
    const authInfo = {
        users,loader,createUser,login

    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;