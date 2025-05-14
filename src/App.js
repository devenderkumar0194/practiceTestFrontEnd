import './App.css';

import MyHead from './Component/MyHead';
import ProductList from './Component/Product/List';


function App() {
  return (
    <div className="App">

      <MyHead heading="My Front End Test" desc="Resize this responsive page to see the effect!" />
      <ProductList/>     
    </div>
  );
}

export default App;
