require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const WatchlistModel  = require("./Models/WatchlistModel");
const User = require("./Models/UserModel");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const cors = require("cors");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", 'http://localhost:3001'], 
  credentials: true                // ✅ Required for cookies
}));

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


// app.get("/addWatchlist", async (req, res) => {
//   let tempWatchlist = [
//     { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
//     { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
//     { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
//     { name: "KPITTECH", price: 266.45, percent: "3.54%", isDown: false },
//     { name: "QUICKHEAL", price: 308.55, percent: "-0.15%", isDown: true },
//     { name: "WIPRO", price: 577.75, percent: "0.32%", isDown: false },
//     { name: "M&M", price: 779.8, percent: "-0.01%", isDown: true },
//     { name: "RELIANCE", price: 2112.4, percent: "1.44%", isDown: false },
//     { name: "HUL", price: 512.4, percent: "1.04%", isDown: false },
//   ];

//   try {
//     await WatchlistModel.insertMany(tempWatchlist);
//     res.send("Watchlist added successfully");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error inserting watchlist");
//   }
// });


app.get("/allHoldings", async (req, res) => {         // Endpoint to get all holdings
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {        // Endpoint to get all positions
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allWatchlist", async (req, res) => {        // Endpoint to get all watchlist items
  const allWatchlist = await WatchlistModel.find({});
  res.json(allWatchlist);
});

app.post("/newOrder", async (req, res) => {       // Endpoint to create a new order
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

// Dashboard route for user data
app.get("/dashboard-user", userVerification, async (req, res) => {
  const user = await User.findById(req.user._id); // set during token verification
  res.json({ user });
});

// Auth route
app.use("/", authRoute);

// JWT middleware if needed
app.use("/", userVerification);

app.listen(PORT, () => {
  console.log(`App Started on port ${PORT}`);
  mongoose.connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));
});
