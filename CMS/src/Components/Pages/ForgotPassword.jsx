import React, { useState } from "react";
import { MdArrowBack} from "react-icons/md";
import { Link } from "react-router-dom";
import { MdHelpOutline } from 'react-icons/md';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await fetch("https://localhost:3001/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Password reset link has been sent to your email.");
      } else {
        setMessage("Error sending password reset link. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <>
    <div className="container p-5" >
      <p className="text-center fs-3"><MdHelpOutline /> </p>


      <h2 className="text-center">Forgot Password?</h2>
      <p className="text-center">No worries we'll send you reset insructions.</p>
      <div className="d-flex justify-content-center align-items-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         className="form-control w-50"    
  />

      </div>

      <div className="d-flex justify-content-center align-items-center mt-4 ">
      <button onClick={handleForgotPassword} className="btn text-white w-50 rounded-pill"style={{background:'#274d60'}}>
        Reset Password
      </button>
      {message && <p>{message}</p>}

      </div>

    </div>
    <div className="text-center">
    <Link to={'/user/login'} className="text-decoration-none" style={{color:'#274d60'}}><MdArrowBack/>Back to login</Link>

    </div>
   </>
  );
};

export default ForgotPassword;
