var express = require('express');
var router = express.Router();
const checkoutController = require('../controllers/checkoutController')
const estadosController = require('../controllers/estadosController')
const jwtVerify = require('../middlewares/jwtVerify')

/* GET users listing. */
router.get('/', estadosController.getStates, estadosController.getCountry, checkoutController.checkout);

router.get('/carrinho', jwtVerify, checkoutController.carrinho);
router.post('/carrinho', jwtVerify, checkoutController.addToCart);


module.exports = router;