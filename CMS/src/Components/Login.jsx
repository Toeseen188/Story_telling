import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';

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

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // Get existing users from localStorage, or initialize as an empty array if none exist
      const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

      // Check if the user exists based on the email and password
      const user = existingUsers.find(
        (user) => user.email === values.email && user.password === values.password
      );

      if (user) {
        if (rememberMe) {
          // Store the user in localStorage for persistence
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          // Use sessionStorage for temporary storage
          sessionStorage.setItem('user', JSON.stringify(user));
        }

        setUser(user);

        Swal.fire({
          title: 'Success!',
          text: 'Login successful.',
          icon: 'success',
          confirmButtonText: 'Proceed to Dashboard',
        }).then(() => {
          navigate('/dashboard');
        });
      } else {
        // If no matching user found or credentials don't match
        Swal.fire({
          title: 'Error!',
          text: 'Invalid email or password.',
          icon: 'error',
          confirmButtonText: 'Try Again',
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
