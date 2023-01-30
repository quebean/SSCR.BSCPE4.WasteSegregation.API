const Tags = require("../models/tags");

module.exports.CreateTag = async (req, res) => {
    const tag = new Tags(req.body);
    try {
        const taga = await Tags.find({subjectId: tag.subjectId});
        if (taga) {
            res.status(501).json({ success: false, message: "Tag is already Registered" });
            return;
        }
        const result = await Tags.create(tag);
        res.status(201).json({ tags: result, success: true });
    } catch (error) {
        res.status(501).json(error, { success: false });
    }
}

module.exports.GetTagBySubjectId = async (req, res) => {
    const subjectId = req.body.subjectId
    try {
        const result = await Tags.find({subjectId: subjectId});
        res.status(201).json({ tag: result, success: true });
    } catch (error) {
        res.status(501).json(error, { success: false });
    }
}