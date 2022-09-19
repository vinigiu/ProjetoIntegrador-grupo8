const cep = require('../config/cep');



const cepController = {
    getCep: function (req, res, next) {
        cep.get()
            .then(cepReturned => {
                const cep = cepReturned.data

                // return res.render('checkout', { country: country })
                req.session.cepEndereco = cep
                console.log(cep)
                next()


            })
            .catch(error => console.log(error))

    }
}

module.exports = cepController
