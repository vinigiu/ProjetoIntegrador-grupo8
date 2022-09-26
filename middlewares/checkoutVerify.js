const {body, validationResult} = require('express-validator')

const checkoutVerify = {
    validate: [
        body('firstName')
            .notEmpty().withMessage('Nome precisa ser preenchido').bail()
            .isString().withMessage('Nome não pode conter caractéres que não sejam letras').bail(),
        body('lastName')
            .notEmpty().withMessage('Sobrenome precisa ser preenchido').bail()
            .isString().withMessage('Sobrenome não pode conter caractéres que não sejam letras').bail(),
        body('email')
            .notEmpty().withMessage('Email precisa ser preenchido').bail()
            .isEmail().withMessage('Email inválido').bail(),
        body('address')
            .notEmpty().withMessage('Endereço precisa ser preenchido').bail(),
        body('numberEnd')
            .notEmpty().withMessage('Número do endereço precisa ser preenchido').bail(),
        body('bairro')
            .notEmpty().withMessage('Bairro precisa ser preenchido').bail()
    ],

    result: (req,res,next) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.render('checkout',{errors:errors.errors, states:req.session.states, country:req.session.country, totalCompra: req.session.totalCompra, produto: req.session.produto})
        }
        next()
    }
}

module.exports = checkoutVerify