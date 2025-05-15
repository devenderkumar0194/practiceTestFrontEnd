import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("222222222"); // null means not logged in

    const token = Cookies.get('token');
    const checkToken = () => {

        
        console.log("token ", token);
    

    }

  useEffect(()=>{
    checkToken();
  } ,[token]);


  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
