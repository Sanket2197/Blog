const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true
  },
  blogDescription: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blog = mongoose.model("blog", BlogSchema);
