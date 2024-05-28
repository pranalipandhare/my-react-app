import React from "react";
import "./LoginForm.css";
import { FaUserAlt, FaLock } from "react-icons/fa/index.js";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>Login Form</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAlt className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit"> Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
