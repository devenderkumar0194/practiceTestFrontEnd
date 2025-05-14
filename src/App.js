import './App.css';
import Home from './Component/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './Component/Product/Detail';


function App() {
  return (
    <Router>

      <div className="App">


        <Routes>      
          
            <Route path="/" element={<Home/>} />
            <Route path="/product-details" element={<ProductDetail/>} />
            
        </Routes>
    
      </div>

    </Router>

  );
}

export default App;
