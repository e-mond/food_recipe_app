import React from "react";
import "./SignUpForm.css"; // Import the CSS file
import SigninForm from "./SignInForm";
import { Link } from "react-router-dom";

function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Email and password are required');
    } else {
      alert('Thank you for signing up!');
      // Handle form submission
    }
  };

  return (
    <div>
      <h2 className="signin">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="email">
          Email:
        </label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password" className="password">
          Password:
        </label>
        <input type="password" id="password" name="password" />
        <button type="submit" className="btn1">
          Sign Up
        </button>
        <br />
        <Link to="/signin">
          <button type="submit" className="btn1">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUpForm;