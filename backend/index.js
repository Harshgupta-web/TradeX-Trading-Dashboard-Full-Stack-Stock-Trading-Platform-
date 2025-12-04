require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const AuthRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { verifyToken } = require("./Middlewares/AuthMiddleware");

const app = express();

let isConnected = false;

// ✅ Recommended for proxy setups (important for cookies on Vercel)
app.set("trust proxy", 1);

// ✅ Configure CORS properly for production
app.use(
  cors({
    origin: ["http://localhost:3001","http://localhost:3002"],
    credentials: true,
  })
);

// app.use(
//   cors({
//     origin:
//       process.env.NODE_ENV === "production"
//         ? process.env.FRONTEND_URL
//         : ["http://localhost:3001", "http://localhost:3002"],
//     credentials: true,
//   })
// );

app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Root route
app.get("/", (req, res) => res.send("Server is working ✅"));

// ✅ Routes
app.use("/auth", AuthRoute);

// ✅ Protected routes
app.get("/allHoldings", verifyToken, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", verifyToken, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});



// ✅ Replace your mongoose.connect() section with this
const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    isConnected = db.connections[0].readyState;
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

// ✅ Call connectDB once on cold start
connectDB();


// ✅ Export app instead of listening (for Vercel)
module.exports = app;
