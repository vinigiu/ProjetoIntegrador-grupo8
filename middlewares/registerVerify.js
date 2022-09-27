const {body, validationResult} = require('express-validator')

const registerVerify = {
    validate: [
        body('email')
            .notEmpty().withMessage('Email precisa ser preenchido').bail()
            .isEmail().withMessage('Email inválido').bail(),
        body('cpf')
            .isNumeric().withMessage('Somente caractéres numéricos são aceitos').bail()
            .isLength({ min: 11, max: 11 }).withMessage('CPF deve conter 11 dígitos').bail(),
        body('nome')
            .notEmpty().withMessage('Nome precisa ser preenchido').bail()
            .isString().withMessage('Nome não pode conter caractéres que não sejam letras').bail(),
        body('sobrenome')
            .notEmpty().withMessage('Sobrenome precisa ser preenchido').bail()
            .isString().withMessage('Sobrenome não pode conter caractéres que não sejam letras').bail(),
        body('data_nasc')
            .notEmpty().withMessage('Data de Nascimento precisa ser preenchida').bail(),
        body('tel')
            .notEmpty().withMessage('Telefone precisa ser preenchido').bail(),
        body('endereco')
            .notEmpty().withMessage('Endereço precisa ser preenchido').bail(),
        body('complemento')
            .notEmpty().withMessage('Número precisa ser preenchido').bail()
            .isNumeric().withMessage('Somente caractéres numéricos').bail(),
        body('cidade')
            .notEmpty().withMessage('Cidade precisa ser preenchida').bail(),
        body('senha')
            .notEmpty().withMessage('Senha precisa ser preenchida').bail()
            .isLength({ min: 3, max: 15 }).withMessage('Senha precisa ter no mínimo 3 e no máximo 15 caractéres').bail(),
        body('senha2')
            .notEmpty().withMessage('Confirmação der senha precisa ser preenchida').bail()
            .custom((value, { req }) => {
                if (value !== req.body.senha) {
                    throw new Error('As senhas não correspondem');
                }
                    return true;
            }),
    ],

    result: (req,res,next) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.render('cadastro',{errors:errors.errors, old:req.body})
        }
        next()
    }
}

module.exports = registerVerify