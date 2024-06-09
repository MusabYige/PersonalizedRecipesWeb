const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(checkUser);

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = "YOUR_DB_URL";
mongoose
  .connect(dbURI, {})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/recipes", requireAuth, (req, res) => res.render("recipes"));

app.use(authRoutes);
