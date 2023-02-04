const User = require("../models/user");

module.exports.CreateUser = async (req, res) => {
    const user = new User(req.body);
    try {
        if (await User.findOne({subjectId: user.subjectId})) {
            res.status(500).json({ error: "User is already Registered" });
        } else if (await User.findOne({tagId: user.tagId})) {
            res.status(500).json({ error: "Tag is already Registered" });
        }  else {
            const result = await User.create(user);
            res.status(200).json(result);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.GetUserBySubjectId = async (req, res) => {
    const subjectId = req.body.subjectId;
    try {
        const result = await User.findOne({subjectId: subjectId});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}