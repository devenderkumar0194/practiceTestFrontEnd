import './App.css';
import Home from './Component/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './Component/Product/Detail';
import LoginPage from './Component/User/Login';
import Dashboard from './Component/Dashboad/Dashboad';
import {AuthProvider } from './AuthContext';


function App() {

  return (
    <Router>
       <AuthProvider>
          <div className="App">
              
              <Routes>      
                
                  <Route path="/" element={<Home/>} />                  
                  <Route path="/product-details" element={<ProductDetail/>} />
                  <Route path="/login" element={<LoginPage/>} />

                  {/* Private route */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* <Route path="/profile" element={<Profile />} /> */}

              </Routes>
            </div>
       </AuthProvider>
    </Router>

  );
}

export default App;
