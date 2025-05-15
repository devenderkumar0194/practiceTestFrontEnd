import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://localhost:5000/api'; 

const getProduct = async () => {
    const products  = await axios.get(baseURL+'/product-list');
    return products.data;
}

const login = async (email, password) => {

    const obj =  {
      email: email,
      password: password
    }
    
    try {

        const res = await axios.post(
        baseURL+'/login',
        obj,
        {
            headers: {
            //Authorization: 'Bearer YOUR_TOKEN_HERE',
            'Content-Type': 'application/json',
            },
        }
        );

        return res.data;

    } catch (err) {

        if(err.response.status === 409){
            return err.response.data;
        }
    }
}


const getUserDetails  = async () => {
    
    const token = Cookies.get('token');
    
    try {

        const res = await axios.get(baseURL+'/user-detiails', {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });

        return res.data;

    } catch (err) {
        if(err.response.status === 409){
            return err.response.data;
        }
    }

}

const logout = async () => {

    Cookies.remove('token');
    const res =  await axios.get(baseURL+'/logout', {}, { withCredentials: true });
    return res.data;    
}


const obj = {getProduct, login, getUserDetails, logout};

export default obj;