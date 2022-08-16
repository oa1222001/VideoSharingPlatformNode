const mongoose = require("mongoose");

const Comment = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
    videoId: {
      type: String,
      required: true,
      ref: "Video",
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", Comment);
