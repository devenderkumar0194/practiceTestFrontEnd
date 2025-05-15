import './App.css';
import Home from './Component/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './Component/Product/Detail';
import LoginPage from './Component/User/Login';
import Dashboard from './Component/Dashboad/Dashboad';


function App() {
  return (
    <Router>

      <div className="App">


        <Routes>      
          
            <Route path="/" element={<Home/>} />
            <Route path="/product-details" element={<ProductDetail/>} />
            
            <Route path="/login" element={<LoginPage/>} />

            <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
    
      </div>

    </Router>

  );
}

export default App;
