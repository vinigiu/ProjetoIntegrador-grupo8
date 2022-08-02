const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '../data/usersDataBase.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

const usersController = {
    cadastroPage: (req,res) => {
        res.render('cadastro')
    },
    cadastroExec: (req,res) => {
        let newUser = req.body;
        users.push(newUser)
        let usersJSON = JSON.stringify(users,null,4);
        fs.writeFileSync(usersPath, usersJSON)

        console.log('   = ', req.body)

        res.render('login')
    },


    loginPage: (req,res) => {
        res.render('login')
    },
    loginExec: (req,res) => {
        res.render('login')
    }
}

module.exports = usersController