const User = require("../models/UserModel.js");
require("dotenv").config();

const jwt = require("jsonwebtoken");
require("crypto");
require("crypto-js");

const generateToken = (user) => {
  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the .env file");
  }

  const payload = { id: user._id };
  const expiresInDuration = "30d";

  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: expiresInDuration,
  });
};

const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user);

    // Logging token and user ID to the console
    console.log("Generated Token:", token);
    console.log("User ID:", user._id);

    res.cookie("token", token);
    res.json({
      token,
      user,
    });
  } else {
    console.log("Invalid login attempt for user:", userName);
    res.status(401).json("Invalid Email or Password");
  }
};

const registerUser = async (req, res) => {
  const { userName, fullName, email, password, phoneNo, pin } = req.body;
  const amount = 10000;
  const upiId = `${userName}@offpay`;
  const userExists = await User.findOne({ $or: [{ email }, { userName }] });
  if (userExists) {
    res.status(404).json({ messsage: "Username or Email Already Exist" });
  } else {
    const user = await User.create({
      userName,
      fullName,
      email,
      password,
      phoneNo,
      pin,
      amount,
      upiId,
    });
    if (user) {
      res.status(201).json({
        Success: "User Registered Successfully!",
      });
    } else {
      res.status(400);
    }
  }
};

const getUser = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ error: "No token provided or invalid format" });
  }

  const token = authHeader.split(" ")[1]; // Extract token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify token
    const user = await User.findById(decoded.id); // Fetch user from DB

    if (!user) {
      return res.status(404).send({ error: "User Not Found...!" });
    }

    res.status(200).send({ user });
  } catch (error) {
    res.status(401).send({ error: "Invalid Token" });
  }
};

module.exports = {
  loginUser,
  registerUser,
  getUser,
  generateToken,
};
