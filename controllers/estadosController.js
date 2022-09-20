const estados = require('../config/estados');


const estadosController = {
    getStates: function (req, res,next) {
        estados.get('/estados?orderBy=nome')
            .then(statesReturned => {
                const states = statesReturned.data
                
                // return res.render('checkout', { states: states })
                req.session.states = states
                next()
            })
            .catch(error => console.log(error))
    },
    getCountry: function (req, res, next) {
        estados.get('/paises?orderBy=nome')
            .then(countryReturned => {
                const country = countryReturned.data
                
                // return res.render('checkout', { country: country })
                req.session.country = country
                next()


            })
            .catch(error => console.log(error))
    },
    

}
module.exports = estadosController
