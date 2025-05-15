import { createContext, useContext, useEffect, useState } from "react";
import Axios_Api from './Axios_Api';

const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState({}); // null means not logged in
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    const checkUserIsAuthenticated = async () => {
  
       const res =  await Axios_Api.getUserDetails();

       if(res.status === 200){
          setUser(res.data);
          setIsAuthenticated(true);
       }else{
          setUser({});
          setIsAuthenticated(false);
       }
    }

    useEffect(()=>{
      checkUserIsAuthenticated();
    } ,[ isAuthenticated, user]);

  return (
  <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, user,setUser  }}>
      {children}
    </AuthContext.Provider>
  );
};
