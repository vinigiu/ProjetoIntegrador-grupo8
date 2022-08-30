const db = require('../models')

const productController = {
    show: async (req,res) => {
        const produtoID = req.params.id;
        const produto = await db.Produto.findByPk(produtoID);
        res.render('product', {produto:produto})
    },

}

module.exports = productController