import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';  // Import SweetAlert2
import logo from '../assets/logo.png';
import axios from 'axios';

// Validation Schema with username instead of firstName
const validationSchema = yup.object({
  username: yup.string()
    .required('Username is required')
    .matches(/^[A-Za-z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
    .min(2, 'Username must be at least 2 characters long')
    .max(50, 'Username cannot exceed 50 characters'),

  email: yup.string()
    .required('Email is required')
    .email('Invalid email address'),

  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
});

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '', 
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:3001/auth/signup', values);

        if (response.status === 201) {
          const data = await response.data; // Parse the response data
          setUser(data); // Update the user state with the received data

          Swal.fire({
            title: 'Success!',
            text: 'User registered successfully.',
            icon: 'success',
            confirmButtonText: 'Proceed to Login',
          }).then(() => {
            navigate('/user/login');
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 401 ) {
          Swal.fire({
            title: 'Error!',
            text: 'Username or email already exists.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
          return;
        }
        console.error('Signup error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred during signup.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    },
    validationSchema
  });

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="glassmorphism-card p-4 w-100" style={{ maxWidth: '400px' }}>
      <div className='d-flex justify-content-center mb-3'>
          <img
            src={logo}
            alt="ET Logo"
            className="logo img-fluid"
            style={{ width: '20%', cursor: "pointer" }} 
            onClick={() => navigate('/')}
          />
        </div>
        <h4 className='text-center' style={{ color: "#3F5C40" }}>Create an account</h4>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username" 
              placeholder="Username"
              {...formik.getFieldProps('username')}
              className={`formInput ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="invalid-feedback">{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
              className={`formInput ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
              className={`formInput ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="register-forget">
            <label style={{ color: "#3F5C40" }}>
              <input
                type="checkbox"
                required
              /> I agree to the terms & conditions
            </label>
          </div>

          <button type="submit" className='mt-3'>Sign Up</button>
          <p className='mt-3 text-center' style={{ color: "#274d60" }}>Already have an account? <Link to="/user/login" className='SignInLink fw-bold'>Sign in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;