import axios from 'axios';

const getProduct = async () => {
    const products  = await axios.get('http://localhost:5000/api/product-list');
    return products.data;
}

const obj = {getProduct};

export default obj;