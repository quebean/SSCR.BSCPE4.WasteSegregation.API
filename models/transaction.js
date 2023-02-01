const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  tagId: {
    type: String,
    required: true
  },
  metal: {
    type: Number,
    required: true
  },
  plastic: {
    type: Number,
    required: true
  },
  paper: {
    type: Number,
    required: true
  }
}, { timestamps: true });


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;