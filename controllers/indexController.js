const listaProdutos = [
    {
        nome:'Boné Laranja', 
        preco:'R$ 100,00', 
        valorParcela:'R$ 25,00', 
        image1:'/images/products/bone1/bone1-frente.webp', 
        image2:'/images/products/bone1/bone1-pic2.webp', 
        image3:'/images/products/bone1/bone1-pic3.webp', 
        images4:'/images/products/bone1/bone1-pic4.webp'
    },
    {
        nome:'Boné Preto NY', 
        preco:'R$ 100,00', 
        valorParcela:'R$ 25,00',
        image1:'/images/products/bone2/bone2-frente.webp', 
        image2:'/images/products/bone2/bone2-pic2.webp', 
        image3:'/images/products/bone2/bone2-pic3.webp', 
        images4:'/images/products/bone2/bone2-pic4.webp'
    },
    {
        nome:'Boné Preto Seahawks', 
        preco:'R$ 100,00', 
        valorParcela:'R$ 25,00',
        image1:'/images/products/bone3/bone3-frente.webp', 
        image2:'/images/products/bone3/bone3-pic2.webp', 
        image3:'/images/products/bone3/bone3-pic3.webp', 
        images4:'/images/products/bone3/bone3-pic4.webp'
    },
    {
        nome:'Boné Roxo', 
        preco:'R$ 100,00', 
        valorParcela:'R$ 25,00',
        image1:'/images/products/bone4/bone4-frente.webp', 
        image2:'/images/products/bone4/bone4-pic2.webp', 
        image3:'/images/products/bone4/bone4-pic3.webp', 
        images4:'/images/products/bone4/bone4-pic4.webp'
    },
]

const indexController = {
    home: (req,res) => {
        res.render('index', {produtos:listaProdutos})
    }
}

module.exports = indexController