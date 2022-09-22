const db = require('../models')
const correiosController = require('../controllers/correiosController')
const fs = require('fs')

const productController = {
    show: async (req,res,next) => {
        const produtoID = req.params.id;
        const produto = await db.Produto.findByPk(produtoID);
        req.session.produtoID = produtoID

        res.render('product', {produto:produto, resultado:'undefined'})
    },

    getPreco: async (req,res) => {
        const produtoID = req.params.id;
        const produto = await db.Produto.findByPk(produtoID);

        const resultado = await  correiosController.calculaPreco(req,res)

        //const resultado = await JSON.parse(fs.readFileSync(`${__dirname}\\assetCorreio\\correios.json`))
        console.log(resultado)
        const resultadoTratado = JSON.parse(resultado).Servicos.cServico[0].Valor[0]

        res.render('product', {produto:produto, resultado:resultadoTratado})
    }
}

module.exports = productController;