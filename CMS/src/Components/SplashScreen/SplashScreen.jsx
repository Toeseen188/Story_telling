  import React, { useEffect, useState } from 'react';
  import logo from '../../assets/logo.png'

  const SplashScreen = ({ onSplashEnd }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0); 

    useEffect(() => {
      let progressInterval;

      if (progress < 100) {
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev < 100) {
              return prev + 1; 
            } else {
              clearInterval(progressInterval); 
              return prev;
            }
          });
        }, 50); 
      }
      return () => clearInterval(progressInterval); 
    }, [progress]);

    useEffect(() => {
      if (progress === 100) {
        setIsVisible(false); 
        onSplashEnd(); 
      }
    }, [progress, onSplashEnd]); 

    return (
      <div className={`splash-screen ${!isVisible ? 'hidden' : ''}`}>
        <div className="content">
          <img src={logo} alt="ET logo" className='ETlogo'/>    
              <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    );
  };

  export default SplashScreen;
