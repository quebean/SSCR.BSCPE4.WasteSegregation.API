const Redeem = require("../models/redeem");
const User = require("../models/user");

module.exports.CreateRedeem = async (req, res) => {
    const redeem = new Redeem(req.body);
    try {
        const user = await User.findOne({subjectId: redeem.subjectId});
        if(user.rewardBalance - redeem.amount >= 0) {
            const result = await Redeem.create(redeem);
            user.rewardBalance = user.rewardBalance - redeem.amount;
            await User.findOneAndUpdate({subjectId: user.subjectId}, {rewardBalance: user.rewardBalance});
            res.status(200).json(result);
            return;
        } else {
            res.status(500).json({message: "Insufficient Balance"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.GetRedeemsBySubjectId = async (req, res) => {
    const subjectId = req.body.subjectId;
    try {
        const result = await Redeem.find({subjectId: subjectId}).sort({createdAt: "desc"});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}