var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

/* GET users listing. */
router.get('/', productController.show);
router.get('/criar', productController.criar);
router.get('/deletar', productController.deletar);


module.exports = router;