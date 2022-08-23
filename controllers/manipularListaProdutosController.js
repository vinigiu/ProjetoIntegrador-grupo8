const db = require('../models')

const manipularListaProdutosController = {
    create: (req,res) => {
        res.render('criar-produto')
    },
    saveCriar: async (req,res) => {
        console.log(req.files.img1[0].filename)
        const newProduct = {nome:null,preco:null,cor:null,tamanho:null,marca:null,img1:null,img2:null,img3:null,img4:null,qtd_estoque:null,categorias_id:null,descricao:null}

		newProduct.nome = req.body.nome;
		newProduct.preco = req.body.preco;
		newProduct.cor = req.body.cor;
		newProduct.tamanho = req.body.tamanho;
        newProduct.marca = req.body.marca;
        newProduct.img1 = req.files.img1[0].filename;
        newProduct.img2 = req.files.img2[0].filename;
        newProduct.img3 = req.files.img3[0].filename;
        newProduct.img4 = req.files.img4[0].filename;
        newProduct.qtd_estoque = req.body.qtd_estoque;
        newProduct.categorias_id = req.body.categorias_id;
        newProduct.descricao = req.body.descricao;
		//escrevendo a lista de produtos atualizada na base de dados JSON
		await db.Produto.create(newProduct)
        res.render('criar-produto')
    },
    deletar: (req,res) => {
        res.render('deletar-produto')
    },
    saveDeletar: (req,res) => {
        res.render('deletar-produto')
    }
}

module.exports = manipularListaProdutosController