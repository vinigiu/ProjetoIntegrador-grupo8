const {body, validationResult} = require('express-validator')

const productVerify = {
    validate: [
        body('nome')
            .notEmpty().withMessage('Nome precisa ser preenchido').bail(),
        body('preco')
            .notEmpty().withMessage('Preço precisa ser preenchido').bail()
            .isNumeric().withMessage('Preço deve ser numérico').bail(),
        body('cor')
            .notEmpty().withMessage('Cor precisa ser preenchida').bail(),
        body('tamanho')
            .notEmpty().withMessage('Tamanho precisa ser preenchido').bail(),
        body('marca')
            .notEmpty().withMessage('Marca precisa ser preenchida').bail(),
        body('descricao')
            .notEmpty().withMessage('Descrição precisa ser preenchida').bail(),
        body('qtd_estoque')
            .notEmpty().withMessage('Quantidade em Estoque precisa ser preenchida').bail(),
        body('categorias_id')
            .notEmpty().withMessage('ID da categoria precisa ser preenchida').bail(),
    ],

    result: (req,res,next) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.render('criar-produto',{errors:errors.errors, old:req.body})
        }
        next()
    }
}

module.exports = productVerify