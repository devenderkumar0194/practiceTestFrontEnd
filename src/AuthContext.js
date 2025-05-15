import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState({}); // null means not logged in
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    const token = Cookies.get('token');
    const checkToken = () => {
  
        console.log("token ", user, token);
        
    }

    useEffect(()=>{
      checkToken();
    } ,[ isAuthenticated, user]);

  return (
  <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, user,setUser  }}>
      {children}
    </AuthContext.Provider>
  );
};
