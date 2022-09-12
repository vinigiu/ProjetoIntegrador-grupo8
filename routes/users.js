var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
const registerVerify = require('../middlewares/registerVerify')

/* GET users listing. */
router.get('/cadastro', usersController.cadastroPage);
router.post('/cadastro', registerVerify.validate, registerVerify.result, usersController.cadastroExec);
router.get('/login', usersController.loginPage);
router.post('/login', usersController.loginExec);


module.exports = router;
