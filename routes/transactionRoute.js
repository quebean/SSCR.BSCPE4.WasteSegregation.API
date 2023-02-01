const express = require("express");
const router = express.Router();

const { CreateTransaction, GetTransactionsByTagId } = require("../controllers/transactionController");

router.post("/CreateTransaction", CreateTransaction);
router.post("/GetTransactionsByTagId", GetTransactionsByTagId);

module.exports = router;