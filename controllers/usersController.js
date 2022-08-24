const db = require('../models')
const bcrypt = require('bcrypt');

const usersController = {
    cadastroPage: (req,res) => {
        res.render('cadastro')
    },
    cadastroExec: async (req,res) => {
        const enderecoCompleto = {endereco_fatura:null, endereco_entrega:null};

        enderecoCompleto.endereco_fatura = req.body.endereco + ' ' + req.body.complemento + ' ' + req.body.cep + ' ' + req.body.cidade + ' ' + req.body.estado;

        enderecoCompleto.endereco_entrega = req.body.endereco + ' ' + req.body.complemento + ' ' + req.body.cep + ' ' + req.body.cidade + ' ' + req.body.estado;

        await db.Endereco.create(enderecoCompleto)

        const ultimoIdEndereco = await db.Endereco.findOne({
            order: [['id','DESC']] 
        })

        const newUser = {nome:null, sobrenome:null, email:null, senha:null, data_nasc:null, cpf:null, tel:null, genero:null, enderecos_id:null};
        newUser.nome = req.body.nome;
        newUser.sobrenome = req.body.sobrenome;
        newUser.email = req.body.email;
        newUser.senha = bcrypt.hashSync(req.body.senha,10);
        newUser.data_nasc = req.body.data_nasc;
        newUser.cpf = req.body.cpf;
        newUser.tel = req.body.tel;
        newUser.genero = req.body.genero;
        newUser.enderecos_id = ultimoIdEndereco.id

        await db.Usuario.create(newUser)

        res.render('login')
    },


    loginPage: (req,res) => {
        res.render('login')
    },

    loginExec: async (req,res) => {
        const emailDigitado = req.body.email;
		const senhaDigitada = req.body.senha;

		if(await db.Usuario.findOne({where: {email: emailDigitado}})) {
			var user = await db.Usuario.findOne({where: {email: emailDigitado}})
		} else {
			return res.send("Email inválido")
		};
		const emailDb = user.email;
		const senhaDb = user.senha;

		if (emailDigitado != await emailDb) {
			return res.send("Email inválido")
		}

        const match = await bcrypt.compare(senhaDigitada, senhaDb)

        if (!match) {
			return res.send("Senha inválida")
		}

        return res.send('Bem vindo!')
    }
}

module.exports = usersController