const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const redeemSchema = new Schema({
  subjectId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
}, { timestamps: true });


const Redeem = mongoose.model("Redeem", redeemSchema);

module.exports = Redeem;