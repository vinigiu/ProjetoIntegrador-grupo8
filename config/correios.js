const axios = require('axios')

const correios = axios.create({
    baseURL: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?'
})

module.exports = correios