const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*", // Allow requests from any origin
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

const userRoutes = require("./routes/userRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const noteRoutes = require("./routes/noteRoutes");
const moneyRoutes = require("./routes/moneyRoutes");

const PORT = process.env.PORT || 8000;
dbConnect();

app.get("/", async (req, res) => {
  res.send("Welcome to the Backend API!");
});

app.use("/users", userRoutes, budgetRoutes, noteRoutes, moneyRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
