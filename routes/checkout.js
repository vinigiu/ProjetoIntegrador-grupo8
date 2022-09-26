var express = require('express');
var router = express.Router();

const checkoutController = require('../controllers/checkoutController')
const estadosController = require('../controllers/estadosController')
const checkoutVerify = require('../middlewares/checkoutVerify')
const jwtVerify = require('../middlewares/jwtVerify')

/* GET users listing. */
router.get('/', estadosController.getStates, estadosController.getCountry, checkoutController.checkout);
router.post('/', checkoutVerify.validate, checkoutVerify.result, checkoutController.finalizar)

router.get('/carrinho', jwtVerify, checkoutController.carrinho);
router.post('/carrinho', jwtVerify, checkoutController.addToCart);
router.delete('/carrinho/:id/remover', checkoutController.removerItem);


module.exports = router;