const express = require("express");
const router = express.Router();

const { CreateRedeem, GetRedeemsBySubjectId } = require("../controllers/redeemController");

router.post("/CreateRedeem", CreateRedeem);
router.post("/GetRedeemsBySubjectId", GetRedeemsBySubjectId);

module.exports = router;