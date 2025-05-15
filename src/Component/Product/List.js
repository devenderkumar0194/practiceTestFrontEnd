import { useEffect, useState } from "react";
import ProductCard from "./Card";

import Axios_Api from '../../Axios_Api';

const ProductList = () => {

    const [products, setProducts] = useState([
    ]);


    const getProduct = async () => {

        const products = await Axios_Api.getProduct();

        if(products.status === "success"){
            setProducts(products.data);
        }else {
            setProducts([]);
        }
        
    }

    useEffect( ()=> {
        getProduct();
    },[]);


    return (<>
        <div className="container mt-5">
            <div className="row">

                {products.map((prod) => (
                    <ProductCard product={prod}/>
                ))}
                
            </div>
        </div>
    </>);
}

export default ProductList;