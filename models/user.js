const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  subjectId: {
    type: String,
    required: true
  },
  tagId: {
    type: String,
    required: true
  },
  rewardBalance: {
    type: Number,
    required: true
  }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

module.exports = User;