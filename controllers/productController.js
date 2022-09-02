const db = require('../models')
const correiosController = require('../controllers/correiosController')
const fs = require('fs')

const productController = {
    show: async (req,res,next) => {
        const produtoID = req.params.id;
        const produto = await db.Produto.findByPk(produtoID);

        res.render('product', {produto:produto, resultado:'undefined'})
    },

    getPreco: async (req,res) => {
        const produtoID = req.params.id;
        const produto = await db.Produto.findByPk(produtoID);

        correiosController.calculaPreco(req,res)

        const resultado = await JSON.parse(fs.readFileSync(`${__dirname}\\assetCorreio\\correios.json`))
        const resultadoTratado = resultado.Servicos.cServico[0].Valor[0]

        res.render('product', {produto:produto, resultado:resultadoTratado})
    }

}

module.exports = productController