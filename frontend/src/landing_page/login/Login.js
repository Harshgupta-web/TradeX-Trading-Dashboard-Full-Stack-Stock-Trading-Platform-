import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
        "http://localhost:3000/auth/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3002/";
        }, 1000);
      } else handleError(message);
    } catch (error) {
      console.log(error);
      handleError("Login failed. Please try again.");
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
        // background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2.5rem 3rem",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3" style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>

          <div className="mb-3" style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#000DFF",
              color: "white",
              padding: "0.7rem",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <span>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                style={{ color: "#000DFF", textDecoration: "none" }}
              >
                Signup
              </Link>
            </span>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
