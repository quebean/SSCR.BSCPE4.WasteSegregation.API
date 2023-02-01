const express = require("express");
const router = express.Router();

const { CreateUser, GetUserBySubjectId } = require("../controllers/userController");

router.post("/CreateUser", CreateUser);
router.post("/GetUserBySubjectId", GetUserBySubjectId);

module.exports = router;