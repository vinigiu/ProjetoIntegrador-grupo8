var express = require('express');
var router = express.Router();
const manipularListaProdutosController = require('../controllers/manipularListaProdutosController')

router.get('/criar', manipularListaProdutosController.create);
router.post('/criar', manipularListaProdutosController.saveCriar);

router.get('/deletar', manipularListaProdutosController.deletar);
router.post('/deletar', manipularListaProdutosController.saveDeletar);

module.exports = router;