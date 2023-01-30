const express = require("express");
const router = express.Router();

const { CreateTag, GetTagBySubjectId } = require("../controllers/tagsController");

router.post("/GetTagBySubjectId", GetTagBySubjectId);
router.post("/CreateTag", CreateTag);

module.exports = router;