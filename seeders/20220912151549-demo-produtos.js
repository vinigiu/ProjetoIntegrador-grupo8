'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produto', [{
      nome: 'Boné Laranja',
      preco: 100.00,
      cor: 'Laranja',
      tamanho: 'Grande',
      marca: 'New Era',
      img1:'bone1-frente.webp',
      img2:'bone1-pic2.webp',
      img3:'bone1-pic3.webp',
      img4:'bone1-pic4.webp',
      qtd_estoque: 10,
      categorias_id: 1,
      descricao: 'Boné na cor laranja',
    },
    {
      nome: 'Boné Preto NY',
      preco: 100.00,
      cor: 'Preto',
      tamanho: 'Grande',
      marca: 'New Era',
      img1:'bone2-frente.webp',
      img2:'bone2-pic2.webp',
      img3:'bone2-pic3.webp',
      img4:'bone2-pic4.webp',
      qtd_estoque: 10,
      categorias_id: 1,
      descricao: 'Boné na cor preta ideal para dias ensolarados e disputas esportivas. Se você for torcedor de basquete, melhor ainda! Mas também pode ser usado em partidas de baseball ou goleiros de futebol dos anos 80/90',
    },
    {
      nome: 'Boné Preto Seahawks',
      preco: 100.00,
      cor: 'Preto',
      tamanho: 'Grande',
      marca: 'New Era',
      img1:'bone3-frente.webp',
      img2:'bone3-pic2.webp',
      img3:'bone3-pic3.webp',
      img4:'bone3-pic4.webp',
      qtd_estoque: 10,
      categorias_id: 1,
      descricao: 'Boné na cor preta ideal para dias ensolarados e disputas esportivas. Se você for torcedor de basquete, melhor ainda! Mas também pode ser usado em partidas de baseball ou goleiros de futebol dos anos 80/90',
    },
    {
      nome: 'Boné Roxo',
      preco: 100.00,
      cor: 'Roxo',
      tamanho: 'Grande',
      marca: 'New Era',
      img1:'bone4-frente.webp',
      img2:'bone4-pic2.webp',
      img3:'bone4-pic3.webp',
      img4:'bone4-pic4.webp',
      qtd_estoque: 10,
      categorias_id: 1,
      descricao: 'Boné na cor roxa ideal para dias ensolarados e disputas esportivas. Se você for torcedor de basquete, melhor ainda! Mas também pode ser usado em partidas de baseball ou goleiros de futebol dos anos 80/90',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Produto', null, {});
  }
};
