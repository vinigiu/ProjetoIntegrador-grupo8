var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/cadastro', usersController.cadastroPage);
router.post('/cadastro', usersController.cadastroExec);
router.get('/login', usersController.loginExec);


module.exports = router;
