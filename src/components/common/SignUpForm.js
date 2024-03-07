// SignUpForm.js
import React from "react";
import "./SignUpForm.css"; // Import the CSS file
import SigninForm from "./SignInForm";
import { Link } from "react-router-dom";
function SignUpForm() {
  return (
    <div>
      <h2 className="signin">Sign Up</h2>
      <form>
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

        <Link to="/SigninForm" className="btn1">
          Sign In{" "}
        </Link>
      </form>
    </div>
  );
}

export default SignUpForm;
