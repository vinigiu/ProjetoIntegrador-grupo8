const axios = require('axios')

const cep = axios.create({
    baseURL: 'https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep'
})

module.exports = cep;