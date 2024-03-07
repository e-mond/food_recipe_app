import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles/signin.css';

function SigninForm() {
  return (
    <div className="signin-container">
      <h2 className="signin-heading">Login As Admin</h2>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <div className="form-group" id='bts'>
         <Link to="/signup" className="signup-btn">Sign Up</Link>
          <button id='LogIn' type="submit" className="signin-btn">Login</button>
          <button type="button" className="forget-password-btn">Forgot Password?</button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
