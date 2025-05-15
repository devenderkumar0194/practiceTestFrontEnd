import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import MyHead from "../MyHead";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import Axios_API from "../../Axios_Api";

const Profile = () => {

    const location = useLocation();
    const user = location.state?.user;
    
    const [ error , setError] = useState("");
    
    const { isAuthenticated} = useAuth();
    const navigate = useNavigate();


     const initialValues = {
        name: user.name,
        email: user.email,
        image : null,
    };
    
        const FILE_SIZE = 50 * 1024 * 1024; // 2MB
    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];


    const formik = useFormik({
        initialValues: initialValues,
    
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),

            image: Yup.mixed()
                .required('Image is required')
                // .test('fileSize', 'File size is too large', value => {
                //     return value && value.size <= FILE_SIZE;
                // })
                // .test('fileFormat', 'Unsupported Format', value => {
                //     return value && SUPPORTED_FORMATS.includes(value.type);
                // })
                ,    

            // password: Yup.string()
            // .min(5, 'Must be at least 5 characters')
            // .required('Password is required'),

        //   price: Yup.number()
        //     .typeError('Price must be a number')
        //     .positive('Price must be positive')
        //     .required('Price is required')
        }),
        onSubmit: async (values) => {

            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('image', values.image);

            const res = await Axios_API.updateProfile(formData);
            console.log(res);
        
        }
      });

      








    if(!isAuthenticated){
        navigate('/login');
    }else {
        return <>
            <MyHead heading="Profile" desc="Resize this responsive page to see the effect!" />

            <div className="container mt-5">
            <div className="row">
                    {error}
                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                            <div className='form-group'>
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
                            </div>

                            <div className='form-group'>
                                <label>Email:</label><br />
                                <input readOnly
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

                            {/* <div className='form-group'>
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
                            </div> */}


                            <div className='form-group'>
                                <label>Image:</label><br />
                                <input
                                className='form-control'
                                type="file"
                                name="image"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.image}
                                />
                                {formik.touched.image && formik.errors.image && (
                                <div style={{ color: 'red' }}>{formik.errors.image}</div>
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

}

export default Profile;