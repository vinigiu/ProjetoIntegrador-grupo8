var express = require("express");
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", indexController.index);
router.get("/carrinho", indexController.carrinho);
router.get("/product", indexController.product);
router.get("/checkout", indexController.checkout);
router.get("/login", indexController.login);
router.get("/cadastro", indexController.cadastro);
router.post("/login", indexController.salvarLogin);
router.post("/cadastro", indexController.salvarCadastro);

module.exports = router;
