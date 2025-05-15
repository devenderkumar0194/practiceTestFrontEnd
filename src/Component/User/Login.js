import MyHead from "../MyHead";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Axios_Api from "../../Axios_Api";
import { useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const LoginPage = () => {

    const [ error , setError] = useState("");
    const navigate = useNavigate();

    const {user, setUser} = useAuth();
    
    const initialValues = {
        email: '',
        password: ""
    };
    
        const formik = useFormik({
        initialValues: initialValues,
    
        validationSchema: Yup.object({
        //   name: Yup.string()
        //     .min(3, 'Must be at least 3 characters')
        //     .required('Name is required'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),

            password: Yup.string()
            .min(5, 'Must be at least 5 characters')
            .required('Password is required'),

        //   price: Yup.number()
        //     .typeError('Price must be a number')
        //     .positive('Price must be positive')
        //     .required('Price is required')
        }),
        onSubmit: async (values) => {


            // console.log(values.email);

           const data =  await Axios_Api.login(values.email, values.password);

           if(data.status === "error"){
                setError(data.message);
           }else{
                setError("");
            
                const token = data.data;
                Cookies.set('token', token, { expires: 1 });
            
                setUser();

                navigate('/dashboard');
            }
            // Submit to API or other logic
        }
      });



    return <>
        <MyHead heading="Login" desc="Resize this responsive page to see the effect!" />

         <div className="container mt-5">
            <div className="row">

                {error}

                <form onSubmit={formik.handleSubmit}>
                        {/* <div className='form-group'>
                            <label>Name:</label><br />
                            <input
                            className='form-control'
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name && (
                            <div style={{ color: 'red' }}>{formik.errors.name}</div>
                            )}
                        </div> */}

                        <div className='form-group'>
                            <label>Email:</label><br />
                            <input
                            className='form-control'
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                            <div style={{ color: 'red' }}>{formik.errors.email}</div>
                            )}
                        </div>

                        <div className='form-group'>
                            <label>Password:</label><br />
                            <input
                            className='form-control'
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            />
                            {formik.touched.password && formik.errors.password && (
                            <div style={{ color: 'red' }}>{formik.errors.password}</div>
                            )}
                        </div>

                        {/* <div className='form-group'>
                            <label>Price:</label><br />
                            <input
                            className='form-control'
                            type="text"
                            name="price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            />
                            {formik.touched.price && formik.errors.price && (
                            <div style={{ color: 'red' }}>{formik.errors.price}</div>
                            )}
                        </div> */}

                        <div className='from-group'>
                            <button className='btn btn-primary' type="submit">Submit</button>
                        </div>
                        
                    </form>

            </div>
        </div>    
    
    </>;
}

export default LoginPage;