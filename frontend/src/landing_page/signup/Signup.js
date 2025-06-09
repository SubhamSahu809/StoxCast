import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const [showLoginOption, setShowLoginOption] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message, redirect, userExists } = data;

      if (userExists) {
        handleError(message);
        setShowLoginOption(true);
        return;
      }

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = redirect || "/dashboard";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }

    setInputValue({ email: "", password: "", username: "" });
    setShowLoginOption(false);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-7 text-center mb-4 mb-md-0">
          <img
            src="media/signup.png"
            alt="SignUp"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="fw-bold mb-3">Sign Up Now</h2>
          <p className="text-muted mb-4">Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                placeholder="Choose a username"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Create a password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign Up
            </button>
          </form>

          {showLoginOption && (
            <div className="alert alert-info mt-3 text-center">
              User already exists. Please{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => navigate("/login")}
              >
                Login here
              </button>
              .
            </div>
          )}

          <p className="text-muted text-center mt-4 small">
            By proceeding, you agree to the Zerodha{" "}
            <a href="/terms" className="text-decoration-none">
              terms
            </a>{" "}
            &{" "}
            <a href="/privacy policy" className="text-decoration-none">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
