const jwt = require('jsonwebtoken')
const SECRET = require('../config/secret')

function jwtVerify(req,res,next){
    const token = req.session.token
    jwt.verify(token, SECRET, (err,decoded) => {
        if(err) return res.status(401).render('notLogged');
        req.user = decoded.user;
        next()
    })
}

module.exports = jwtVerify