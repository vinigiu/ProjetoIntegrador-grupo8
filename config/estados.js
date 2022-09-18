const axios = require('axios')

const estados = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
})

module.exports = estados