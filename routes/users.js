var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/cadastro', usersController.cadastro);
router.get('/login', usersController.login);


module.exports = router;
