const estados = require('../config/estados');


const estadosController = {

    getStates: function(req, res){
        estados.get('/estados?orderBy=nome')
        .then(statesReturned=>{
            const states = statesReturned.data
            console.log(states)
            return res.render('checkout',{states:states})
        })
        .catch(error =>console.log(error))
    }
}

module.exports = estadosController
