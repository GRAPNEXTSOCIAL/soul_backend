const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { addAddress, getAddress ,deleteAddress } = require('../controllers/address');
const router = express.Router();


router.post('/user/address/create', requireSignin, userMiddleware, addAddress);
router.post('/user/getAddress', requireSignin, userMiddleware, getAddress);
router.patch(
    '/user/address/delete/:id', 
    requireSignin, 
    userMiddleware, 
    deleteAddress);

module.exports = router;