const {check, validationResult} = require('express-validator')

const productVerify = {
    validate: [
        check('nome')
            .notEmpty().withMessage('Nome precisa ser preenchido').bail(),
        check('preco')
            .notEmpty().withMessage('Preço precisa ser preenchido').bail()
            .isNumeric().withMessage('Preço deve ser numérico').bail(),
        check('cor')
            .notEmpty().withMessage('Cor precisa ser preenchida').bail(),
        check('tamanho')
            .notEmpty().withMessage('Tamanho precisa ser preenchido').bail(),
        check('marca')
            .notEmpty().withMessage('Marca precisa ser preenchida').bail(),
        check('descricao')
            .notEmpty().withMessage('Descrição precisa ser preenchida').bail(),
        check('qtd_estoque')
            .notEmpty().withMessage('Quantidade em Estoque precisa ser preenchida').bail(),
        check('categorias_id')
            .notEmpty().withMessage('ID da categoria precisa ser preenchida').bail(),
    ],

    result: (req,res,next) =>{
        console.log(req)
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.render('criar-produto',{errors:errors.errors, old:req.body})
        }
        next()
    }
}

module.exports = productVerify