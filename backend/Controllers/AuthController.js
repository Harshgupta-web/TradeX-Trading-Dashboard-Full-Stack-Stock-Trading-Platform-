const bcrypt = require("bcryptjs");
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

const { createSecretToken } = require("../util/SecretToken");

exports.signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
  withCredentials: true,
  httpOnly: true,        // ✅ prevent JS access
  secure: true,          // ✅ send only over HTTPS
  sameSite: "None",      // ✅ allow cross-origin cookies
});


    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
  withCredentials: true,
  httpOnly: true,        // ✅ prevent JS access
  secure: true,          // ✅ send only over HTTPS
  sameSite: "None",      // ✅ allow cross-origin cookies
});


    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        email: user.email,
        username: user.username,
        _id: user._id,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.verify = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.json({ status: false });

    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) return res.json({ status: false });
      return res.json({ status: true, user: decoded.id });
    });
  } catch (err) {
    return res.json({ status: false });
  }
}

exports.logout = async (req, res) => {
   try {
    res.clearCookie("token", {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true in prod
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    return res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ success: false, message: "Logout failed" });
  }
}