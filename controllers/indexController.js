const fs = require('fs');
const path = require('path');
const db = require('../models');

const indexController = {
    home: async (req,res) => {
        const produtos = await db.Produto.findAll();
        res.render('index', {produtos:produtos})
    }
}

module.exports = indexController