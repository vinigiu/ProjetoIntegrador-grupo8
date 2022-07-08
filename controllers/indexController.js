var indexController = {
  index: (req, res) => {
    res.render("index");
  },
  product: (req, res) => {
    res.render("product");
  },
  carrinho: (req, res) => {
    res.render("carrinho");
  },
  checkout: (req, res) => {
    res.render("checkout");
  },
  cadastro: (req, res) => {
    res.render("cadastro");
  },
  login: (req, res) => {
    res.render("login");
  },
  salvarCadastro: (req, res) => {
    let {
      Email,
      CPF,
      nome,
      dob,
      cel,
      endereço,
      complemento,
      cep,
      cidade,
      estado,
      sexo,
      senha,
    } = req.body;
    console.log(req.body);
    return res.render("cadastro");
  },
  salvarLogin: (req, res) => {
    let { user, pw } = req.body;
    console.log(req.body);
    return res.render("login");
  },
};

module.exports = indexController;
