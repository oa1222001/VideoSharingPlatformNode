const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const videosRoutes = require("./routes/videos");
const commentsRoutes = require("./routes/comments");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/comments", commentsRoutes);
//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    app.listen(process.env.PORT || 8080);
    console.log("mongoose is ready");
  })
  .catch((err) => console.log(err));
