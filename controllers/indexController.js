const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const listaProdutos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const indexController = {
    home: (req,res) => {
        res.render('index', {produtos:listaProdutos})
    }
}

module.exports = indexController