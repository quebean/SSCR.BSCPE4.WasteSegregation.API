const Transaction = require("../models/transaction");
const User = require("../models/user");

module.exports.CreateTransaction = async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        const user = await User.findOne({tagId: transaction.tagId});
        const points = (transaction.metal * .25)+(transaction.plastic * .15)+(transaction.paper * .05) + user.rewardBalance;
        const result = await Transaction.create(transaction);
        await User.findOneAndUpdate({tagId: transaction.tagId}, {rewardBalance: points});
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