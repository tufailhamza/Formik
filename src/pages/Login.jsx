import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Login button clicked');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
      <div className="bottom-text">
        <p>Don't have an account? <Link to="/" style={{color:"whitesmoke"}}>Sign Up</Link></p>
        <p><Link to="/" style={{color:"whitesmoke"}}>Forgot password?</Link></p>
      </div>
    </div>
  );
};

export default Login;
