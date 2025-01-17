import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
    const logOut = () =>{
        setLoader(true)
        return signOut(auth);
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
        users,loader,createUser,login,logOut

    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;