import { useFormik } from 'formik';
import * as Yup from 'yup';

const Product = (props) => {

    const initialValues = {
      name: props.product.name,
        //   email: '',
      price: props.product.price
    };

    const formik = useFormik({
    initialValues: initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Name is required'),
    //   email: Yup.string()
    //     .email('Invalid email address')
    //     .required('Email is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .positive('Price must be positive')
        .required('Price is required')
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
      // Submit to API or other logic
    }
  });

    return <>

            <div className="container mt-5">
                <div className="row prod-details">
                        <form onSubmit={formik.handleSubmit}>
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

                        {/* <div className='form-group'>
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
                        </div> */}

                        <div className='form-group'>
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
                        </div>

                        <div className='from-group'>
                            <button className='btn btn-primary' type="submit">Submit</button>
                        </div>
                        
                        </form>
                    </div>
            </div>
    </>;
}

export default Product;