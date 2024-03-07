// LoginForm.js
import React from 'react';

function SigninForm() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      {/* Add login form fields */}
    </div>
  );
}

export default SigninForm;
