const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }

  try {
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    req.user = user;
    next(); // ✅ Proceed to the protected route

  } catch (err) {
    console.error("Token verification failed:", err);
    if (!res.headersSent) {
      return res.status(500).json({ status: false, message: "Internal server error" });
    }
  }
};
