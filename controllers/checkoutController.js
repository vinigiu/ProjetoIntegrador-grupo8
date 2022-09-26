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

    finalizar: async (req,res) => {
        const pedido = {};
        const dadosPagamento = {};

        dadosPagamento.forma_pagamento = req.body.paymentMethod
        dadosPagamento.bandeira_cartao = req.body.cardType

        await db.DadoPagamento.create(dadosPagamento)

        pedido.usuario_id = req.session;
        pedido.valor_final = req.session.totalCompra;
        pedido.dados_pagamentos_id = await db.DadoPagamento.findOne({
            order: [ [ 'id', 'DESC' ]],
        });
        pedido.status_id = 1 

        await db.Pedido.create(pedido)
        
        res.render("compraEfetuada")
    }
}

module.exports = checkoutController