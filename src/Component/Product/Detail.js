import { useLocation } from 'react-router-dom';
import MyHead from '../MyHead';
import Product from './Product';



const ProductDetail = () => {

    const location = useLocation();
    const product = location.state?.product;

    return <>
        <MyHead heading="Product Detail" desc="Resize this responsive page to see the effect!" />
        <Product product={product}/>
        
    
    </>;
}

export default ProductDetail;