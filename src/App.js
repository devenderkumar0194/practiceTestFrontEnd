import './App.css';
import Home from './Component/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './Component/Product/Detail';
import LoginPage from './Component/User/Login';
import Dashboard from './Component/Dashboad/Dashboad';
import {AuthProvider } from './AuthContext';
import { useEffect, useState } from 'react';
import Axios_API from './Axios_Api';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const checkUserIsAuthenticated = async () => {

    const res = await Axios_API.getUserDetails();
    if(res.status === 200){
      setIsLogin(true);
    }else {
      setIsLogin(false);
    }
  }
  
  useEffect(()=>{
    checkUserIsAuthenticated();
  },[]);
  

  return (
    <Router>
       <AuthProvider>
          <div className="App">
              
              <Routes>      
                
                  <Route path="/" element={<Home/>} />
                  <Route path="/product-details" element={<ProductDetail/>} />
                  <Route path="/login" element={<LoginPage/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
              </Routes>
            </div>
       </AuthProvider>
    </Router>

  );
}

export default App;
