const correios = require('../config/correios')
const xml2js = require('xml2js')
const fs = require('fs')

const correiosController = {
    calculaPreco: async (req,res) => {
        let cepOrigem = '02733110'
        let peso = '1'
        let formato = 1
        let comprimento = 30
        let altura = 30
        let largura = 30
        let diametro = 0
        let maoPropria = 'n'
        let valorDeclarado = 100
        let avisoRecebimento = 'n'
        let servico = '41106'
        let cepDestino = req.body.cep
        
        let resul = await correios.get(`nCdEmpresa=&sDsSenha=&sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&nVlPeso=${peso}&nCdFormato=${formato}&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&sCdMaoPropria=${maoPropria}&nVlValorDeclarado=${valorDeclarado}&sCdAvisoRecebimento=${avisoRecebimento}&nCdServico=${servico}&nVlDiametro=${diametro}&StrRetorno=xml&nIndicaCalculo=3`)

        if(await resul.data !== 'undefined') {
            const myPromise = new Promise((resolve,reject) =>{

                xml2js.parseString(resul.data, (err,result) => {
                    if(err) {
                        throw err;
                    }
                    const json = JSON.stringify(result, null, 4);
                    resolve(json)
                   //fs.writeFileSync(`${__dirname}\\assetCorreio\\correios.json`, json)
                })
            })
            return await myPromise
        }
        return res.send("Erro")
    }
}

module.exports = correiosController