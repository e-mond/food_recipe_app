import React from "react";

function SigninForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Email and password are required");
    } else {
      // Handle form submission
    }
  };

  return (
    <div>
      <h2 className="signin">Login</h2>
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
