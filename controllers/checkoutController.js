const express = require('express');
const { format } = require('morgan');
const app = express();

const db = require('../models')
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const checkoutController = {
    checkout: (req,res) => {
        if(req.session.produto.length > 0) {
            res.render('checkout', {states:req.session.states, country:req.session.country, totalCompra: req.session.totalCompra, produto: req.session.produto})
        } else {
            //tratar o erro de carrinho vazio
        }
    },

    carrinho: (req,res) => {
        let totalCompra = 0;
        
        let idCart = 1;
        for(let item of req.session.produto) {
            totalCompra += item.preco;
            req.session.produto.idCart = idCart;
            idCart += 1;
        }

        console.log(req.session.produto);
        res.render('carrinho', {produto: req.session.produto, totalCompra: totalCompra})
    },

    addToCart: async(req,res) => {
        const produtoID = req.session.produtoID;
        const produto = await db.Produto.findByPk(produtoID);
        
        let oldSession = req.session.produto;
        req.session.produto = [];

        if(oldSession !== undefined) {
            let idCart = 1;     //gera o índice para o carrinho
            for(let item of oldSession) {
                item.idCart = idCart;
                req.session.produto.push(item);
                idCart += 1;
            }
            produto.idCart = idCart;
            req.session.produto.push(produto);
        
        } else {
            produto.idCart = 1;
            req.session.produto.push(produto)
        }

        //Calcula o total do carrinho e passa para a session
        let totalCompra = 0;
        for(let item of req.session.produto) {
            totalCompra += item.preco;
        }
        req.session.totalCompra = totalCompra;

        res.render('carrinho', {produto:req.session.produto, totalCompra: req.session.totalCompra})
    },

    removerItem: (req,res) => {
        let cartList = req.session.produto;
        let idCart = req.params.id;
        
        let finalCart = [];

        let newIdCart = 1;
        for(let item of cartList) {
            if(item.idCart != idCart) {
                item.idCart = newIdCart;
                finalCart.push(item);
                newIdCart += 1;
            } 
        }
        
        req.session.produto = [];
        req.session.produto = finalCart;
        
        //Calcula o preco final do carrinho após a exclusão do item e devolve para a view carrinho 
        let totalCompra = 0;
        
        for(let item of req.session.produto) {
            totalCompra += item.preco;
        }
        req.session.totalCompra = totalCompra;
        res.render('carrinho', {produto: req.session.produto, totalCompra: req.session.totalCompra})
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