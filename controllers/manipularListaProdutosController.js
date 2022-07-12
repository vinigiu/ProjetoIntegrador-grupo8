const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const listaProdutos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const manipularListaProdutosController = {
    create: (req,res) => {
        res.render('criar-produto')
    },
    saveCriar: (req,res) => {
        const newProduct = {id:null,nome:null,preco:null,valorParcela:null,descricao:null,image1:null}
		const arraylast = listaProdutos.pop() //para pegar o ultimo produto da lista
		//atribuindo valores do produto
		newProduct.id = arraylast.id + 1 ;
		newProduct.nome = req.body.nome;
		newProduct.preco = req.body.preco;
		newProduct.valorParcela = req.body.valorParcela;
		newProduct.descricao = req.body.descricao;
        newProduct.image1 = req.file.filename;
		//escrevendo a lista de produtos atualizada na base de dados JSON
		listaProdutos.push(arraylast);
		listaProdutos.push(newProduct);
		let listaProdutosJSON = JSON.stringify(listaProdutos)
		fs.writeFileSync(productsFilePath, listaProdutosJSON)
        
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