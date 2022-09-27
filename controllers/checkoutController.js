const express = require('express');
const app = express();

const db = require('../models')
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const checkoutController = {
    checkout: (req,res) => {
        if(req.session.produto == undefined || req.session.produto.length == 0) {
            res.redirect('/')
        } else {

            res.render('checkout', {produto: req.session.produto, totalCompra: req.session.totalCompra, states: req.session.states, country: req.session.country});
        }
    },

    carrinho: (req,res) => {
        let totalCompra = 0;
        
        let idCart = 1;
        if(req.session.produto !== undefined) {
            for(let item of req.session.produto) {
                totalCompra += item.preco;
                req.session.produto.idCart = idCart;
                idCart += 1;
            }
        } else {
            req.session.produto = [];
        }

        console.log('Vou imprimir os produtos da session que vão para o carrinho:')
        console.log(req.session.produto);
        res.render('carrinho', {produto: req.session.produto, totalCompra: totalCompra})
    },

    addToCart: async(req,res) => {
        const produtoID = req.session.produtoID;
        const produto = await db.Produto.findByPk(produtoID);
        const {idCart, id, nome, descricao, preco, img1} = produto;   //novoItem passa a receber apenas os parametros listados
        
        const novoItem = {
            idCart: idCart, 
            id: id, 
            nome: nome,
            descricao: descricao, 
            preco: preco,
            img1: img1
        };

        let oldSession = req.session.produto;
        req.session.produto=[];
        
        if(oldSession !== undefined) {
            novoItem.idCart = oldSession.length + 1;
            
            console.log("Imprimindo a partir do segundo item da session:");
            console.log('id: '+ novoItem.id + ' | ' + novoItem.nome + ' | ' + novoItem.preco + ' | ' + novoItem.idCart + ' | '+ novoItem.descricao);

            for(let item of oldSession) {
                req.session.produto.push(item);
            }
            
            //req.session.produto.push(produto);
            req.session.produto.push(novoItem);
        
        } else {
            novoItem.idCart = 1;
            
            req.session.produto.push(novoItem);
            // req.session.produto.push(produto)
        }

        //Calcula o total do carrinho e passa para a session
        let totalCompra = 0;
        for(let item of req.session.produto) {
            totalCompra += item.preco;
        }
        req.session.totalCompra = totalCompra;

        console.log("Vou imprimir a Session do addToCart:")
        console.log(req.session.produto)
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
        // const pedido = {};
        // const dadosPagamento = {};

        // dadosPagamento.forma_pagamento = req.body.paymentMethod
        // dadosPagamento.bandeira_cartao = req.body.cardType

        // await db.DadoPagamento.create(dadosPagamento)
        
        // pedido.id = 1
        // pedido.usuario_id = req.session.usuario.id;
        // pedido.valor_final = req.session.totalCompra;
        // pedido.dados_pagamentos_id = await db.DadoPagamento.findOne({
        //     order: [ [ 'id', 'DESC' ]],
        // });
        // pedido.status_id = 1 

        // await db.Pedido.create(pedido)
        
        res.render("compraEfetuada")
    }
}

module.exports = checkoutController