import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdArrowBack} from "react-icons/md";
import { FaSyncAlt } from 'react-icons/fa';

const SetNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams(); 

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("https://localhost:3001/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, token }),
      });

      if (response.ok) {
        setMessage("Password has been reset successfully.");
      } else {
        setMessage("Error resetting password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="container p-5">
      <p className="text-center fs-3"><FaSyncAlt /></p>
      <h2 className="text-center">Set New Password</h2>
      <div className="d-flex justify-content-center align-items-center">
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
        className="form-control w-50 mb-4"
      />
      </div>

      <div className="d-flex justify-content-center align-items-center">
      <input
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ padding: "10px", width: "300px", marginTop: "10px" }}
        className="form-control w-50 mb-3"
      />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 ">
      <button onClick={handleResetPassword} className="btn text-white w-50 rounded-pill" style={{background:'#274d60'}}>
        Reset Password
      </button>
      </div>
      <div className="text-center mt-4">
    <Link to={'/user/login'} className="text-decoration-none" style={{color:'#274d60'}}><MdArrowBack/>Back to login</Link>

    </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SetNewPassword;
