import app from "@/Firebase/Firebase.config";
// import { googleProvider } from "@/Firebase/firebase.auth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

  export const AuthContext=createContext(null)
    const auth=getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password); 
    };
  
    const profileUpdate = async (updateUser = {}) => {
      setLoading(true);
      await updateProfile(auth.currentUser, updateUser);
      setUser((preUser) => ({ ...preUser, ...updateUser }));
    };
  
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
  
      () => {
        unsubscribe();
      };
    }, []);
  
    const value = {
      user,
      loading,
      createUser,
      signIn,
      profileUpdate,
      googleLogin,
      logout,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    // return <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  };
  
  export default AuthProvider;