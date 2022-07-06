var express = require('express');
var router = express.Router();
const checkoutController = require('../controllers/checkoutController')

/* GET users listing. */
router.get('/', checkoutController.checkout);
router.get('/carrinho', checkoutController.carrinho);


module.exports = router;