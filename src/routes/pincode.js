/** @format */

const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { getPincodes, addPincocdes, deletePincode } = require("../controllers/pincode");
const router = express.Router();

//routes
router.get("/pincode", getPincodes);
router.post("/pincode/add", addPincocdes);
router.delete("/pincode/delete/:pincode",deletePincode)
module.exports = router;

