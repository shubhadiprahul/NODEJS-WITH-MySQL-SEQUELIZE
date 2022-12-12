const express = require('express');
const router = express.Router();
const {addWholesaler,addRetailer,findByWholesalerId,monthlyTurnOver,add_stocks} = require('../controller/index')

router.post('/add_wholesaler',addWholesaler);
router.post('/add_retailer',addRetailer);
router.post('/get_retailerBywholesalerId',findByWholesalerId);
router.get('/monthlyTurnOver',monthlyTurnOver);
router.post('/add_stocks',add_stocks);
// router.get('/',CheckApi);




module.exports = router;