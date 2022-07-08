var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/:id', productController.show);

module.exports = router;