const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const listaProdutos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    show: (req,res) => {
        let productID = req.params.id;
        const produto = listaProdutos.find(element => element.id == productID)
        res.render('product', {produto:produto})
    }
}

module.exports = productController