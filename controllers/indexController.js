const db = require('../models');
const { Op } = require("sequelize")

const indexController = {
    home: async (req,res) => {
        const produtos = await db.Produto.findAll();
        res.render('index', {produtos:produtos})
    },

    search: async (req,res) => {
        const busca = req.query.search;
        let resultado = null;
		
		if(await db.Produto.findOne({where:{nome: {[Op.like]:`%${busca}%`}}})){
			resultado = await db.Produto.findAll({where:{nome: {[Op.like]:`%${busca}%`}}})
		} else {
			resultado = " ";
		}

		res.render('results',{resultado:resultado})
    }
}

module.exports = indexController