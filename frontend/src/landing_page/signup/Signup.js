import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Don't forget this

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

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
        "zzz",
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
    }
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
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
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3" style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="form-control"
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <small style={{ fontSize: "0.8rem", color: "#666" }}>
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="mb-3" style={{ marginBottom: "1rem" }}>
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Enter your username"
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div className="mb-3" style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="password" className="form-label">Password</label>
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
            Sign Up
          </button>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <span>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#000DFF", textDecoration: "none" }}>
                Login
              </Link>
            </span>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
