var express = require('express');
var router = express.Router();
const checkoutController = require('../controllers/checkoutController')
const jwtVerify = require('../middlewares/jwtVerify')

/* GET users listing. */
router.get('/', checkoutController.checkout);
router.get('/carrinho', jwtVerify, checkoutController.carrinho);


module.exports = router;