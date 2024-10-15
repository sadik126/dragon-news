import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Authproviders = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user", currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signinuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authinfo = {
    createuser,
    user,
    logOut,
    signinuser,
    loading,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authproviders;
