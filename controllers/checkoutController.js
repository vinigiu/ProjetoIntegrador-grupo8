const checkoutController = {
    checkout: (req,res) => {
        res.render('checkout')
    },
    carrinho: (req,res) => {
        res.render('carrinho')
    },
}

module.exports = checkoutController