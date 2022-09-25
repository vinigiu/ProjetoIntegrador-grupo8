var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/:id', productController.show);
router.post('/:id', productController.getPreco);

module.exports = router;