const db = require('../models')

const checkoutController = {
    checkout: (req,res) => {
        res.render('checkout')
    },

    carrinho: (req,res) => {
        res.render('carrinho', {produto:'undefined'})
    },

    addToCart: async(req,res) => {
        const produtoID = req.session.produtoID;
        const produto = await db.Produto.findByPk(produtoID);
        let oldSession = req.session.produto
        req.session.produto = []

        if(oldSession !== undefined) {
            for(let item of oldSession) {
                req.session.produto.push(item)
            }
            req.session.produto.push(produto)
        } else {
            req.session.produto.push(produto)
        }
        console.log(req.session.produto)

        res.render('carrinho', {produto:req.session.produto})
    }
}

module.exports = checkoutController