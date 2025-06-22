const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const { exec } = require("child_process");

let dashboardStarted = false;

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists. Please login instead.",
        userExists: true,
      });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // Set to true in production
    });

    if (!dashboardStarted) {
      exec("npm --prefix ../dashboard start", (err, stdout, stderr) => {
        if (err) {
          console.error("Failed to start dashboard:", err);
        } else {
          console.log("Dashboard started successfully.");
          dashboardStarted = true;
        }
      });
    }

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      redirect: "/dashboard",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect password or email" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Start dashboard if not already started
    if (!dashboardStarted) {
      exec("npm --prefix ../dashboard start", (err, stdout, stderr) => {
        if (err) {
          console.error("Failed to start dashboard:", err);
        } else {
          console.log("Dashboard started successfully.");
          dashboardStarted = true;
        }
      });
    }

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      redirect: "/dashboard",
    });

    next();

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
