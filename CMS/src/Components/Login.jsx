import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';
import axios from 'axios';

// Validation schema for login with email
const validationSchema = yup.object({
  email: yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
});

const Login = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:3001/auth/signin', values);
    
        if (response.status === 201) { // Assuming successful login returns 201 OK
          const { accessToken } = response.data;
          localStorage.setItem('token', accessToken);
          Swal.fire({
            title: 'Success!',
            text: 'Login successful.',
            icon: 'success',
            confirmButtonText: 'Proceed to Dashboard',
          }).then(() => {
            navigate('/dashboard');
          });
        } 
      } catch (error) {
        if (error.response && error.response.status === 401 ) {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid Credentials, Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
          return;
        }
        console.error('Login Error', error);
          Swal.fire({
            title: 'Error',
            text: 'Error during log in. Please try again',
            icon: 'error'
          });
        
      }
    },
    validationSchema,
  });

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="glassmorphism-card p-4 w-100" style={{ maxWidth: '400px' }}>
        <div className="d-flex justify-content-center mb-3">
          <img
            src={logo}
            alt="ET Logo"
            className="logo img-fluid"
            style={{ width: '20%', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </div>
        <h4 className="text-center" style={{ color: '#274d60' }}>Login your account</h4>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-check mb-4 d-flex">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-check-input"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember Me
            </label>
            <div className='mx-auto'>
          <Link to="/user/forgotPassword" className="text-decoration-none" style={{color:'#274d60'}}>
            Forgotten Password?
          </Link>
            </div>

          </div>


          <button type="submit" className="btn btn-primary w-100">Log In</button>

          <p className="mt-3 text-center" style={{ color: '#274d60' }}>
            Don't have an account?{' '}
            <Link to="/user/signup" className="SignInLink fw-bold text-decoration-none">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
