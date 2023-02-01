const Transaction = require("../models/transaction");

module.exports.CreateTransaction = async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        const result = await Transaction.create(transaction);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.GetTransactionsByTagId = async (req, res) => {
    const tagId = req.body.tagId;
    try {
        const result = await Transaction.find({tagId: tagId}).sort({createdAt: "desc"});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}