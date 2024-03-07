// LoginForm.js
import React from "react";

function SigninForm() {
  return (
    <div>
      <h2 className="signin">Login</h2>
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
        <br />
        <button type="submit" className="btn1">
          Login
        </button>
      </form>
      {/* Add login form fields */}
    </div>
  );
}

export default SigninForm;
