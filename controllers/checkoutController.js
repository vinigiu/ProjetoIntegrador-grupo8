const db = require('../models')
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const checkoutController = {
    checkout: (req,res) => {
        res.render('checkout', {states:req.session.states, country:req.session.country, totalCompra: req.session.totalCompra, produto: req.session.produto})
    },

    carrinho: (req,res) => {
        let totalCompra = 0;
        
        for(let item of req.session.produto) {
            totalCompra += item.preco;
        }
        console.log(totalCompra);
        res.render('carrinho', {produto: req.session.produto, totalCompra: totalCompra})
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

        let totalCompra = 0;
        
        for(let item of req.session.produto) {
            totalCompra += item.preco;
        }
        req.session.totalCompra = totalCompra

        res.render('carrinho', {produto:req.session.produto, totalCompra: req.session.totalCompra})
    },

    // mostrarEstados: async (req,res) => {
    //     let estadosListados = req.params.estados
    //     console.log(estadosListados)
}

module.exports = checkoutController