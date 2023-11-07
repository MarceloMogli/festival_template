import React from 'react';
import './Error404.styles.css'; // Import your CSS file

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! The page you are looking for doesn't exist.</p>
        <a href="/">Go to Home</a>
      </div>
    </div>
  );
};

export default Error404;
