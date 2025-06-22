import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [mode, setMode] = useState("signup"); // 'signup' or 'login'
  const [inputValue, setInputValue] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const { email, username, password } = inputValue;

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const showError = (msg) => toast.error(msg, { position: "bottom-left", autoClose: 4000 });
  const showSuccess = (msg) => toast.success(msg, { position: "bottom-right", autoClose: 3000 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = mode === "signup" ? "http://localhost:3002/signup" : "http://localhost:3002/login";

    try {
      const { data } = await axios.post(url, inputValue, { withCredentials: true });

      const { success, message, redirect, userExists } = data;

      if (userExists) {
        showError(message);
        setMode("login");
        return;
      }

      if (success) {
        showSuccess(message);
        setTimeout(() => {
          window.location.assign(`http://localhost:3001${redirect || "/dashboard"}`);
        }, 9000);
      } else {
        showError(message);
      }

    } catch (error) {
      console.log(error);
      showError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setInputValue({ email: "", username: "", password: "" });
    }
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        {/* Left image section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/media/signup.png"
            alt="Visual"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Form section */}
        <div className="col-md-5">
          <h2 className="fw-bold mb-3">{mode === "signup" ? "Sign Up Now" : "Login to your Account"}</h2>
          <p className="text-muted mb-4">
            {mode === "signup" ? "Or track your existing application" : "Welcome back! Please enter your details"}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {mode === "signup" && (
              <div className="mb-3">
                <label className="form-label fw-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Choose a username"
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Please wait..." : mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="text-center mt-3">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <button className="btn btn-link p-0" onClick={() => setMode("login")}>
                  Login here
                </button>
              </p>
            ) : (
              <p>
                Don’t have an account?{" "}
                <button className="btn btn-link p-0" onClick={() => setMode("signup")}>
                  Sign up here
                </button>
              </p>
            )}
          </div>

          <p className="text-muted text-center mt-4 small">
            By proceeding, you agree to the{" "}
            <a href="/terms" className="text-decoration-none">terms</a> &{" "}
            <a href="/privacy" className="text-decoration-none">privacy policy</a>.
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
