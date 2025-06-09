require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const cors = require("cors");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", 'http://localhost:3001'], // ✅ Match this with your frontend
  credentials: true                // ✅ Required for cookies
}));

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


// app.get("/addPosition", async(req, res) => {
//     let tempPositions =[
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((item) => {
//     let newHolding = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newHolding.save();
//   });
//   res.send("Done");
// });

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
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
