import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack} from "react-icons/md";
import { MdEmail } from 'react-icons/md';



const ResetPassword = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };
  
  return (
    <div className="container p-5">
    <p className='text-center fs-3'><MdEmail /></p>

      <h2 className="text-center">Reset Password</h2>
      <p className='text-center'>We sent a code to your email. Please enter it below:</p>
      <div className="d-flex justify-content-center align-items-center mt-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="code-input mx-2"
              ref={(el) => (inputRefs.current[index] = el)} 
              onChange={(e) => handleInputChange(e, index)} 
              onKeyDown={(e)=>handleKeyDown(e,index)}
            />
          ))}
      </div>

      <div className="d-flex justify-content-center align-items-center mt-3 ">
      <button className="btn text-white w-50 rounded-pill" style={{background:'#274d60'}}>
        Continue
      </button>
      </div>
      <div className='text-center mt-3'>
      <p>Don't receive the email? <Link>Click here to resend</Link></p>

      </div>

      <div className="text-center mt-4">
    <Link to={'/user/login'} className="text-decoration-none" style={{color:'#274d60'}}><MdArrowBack/>Back to login</Link>
    </div>
      
    </div>
  );
};

export default ResetPassword;
