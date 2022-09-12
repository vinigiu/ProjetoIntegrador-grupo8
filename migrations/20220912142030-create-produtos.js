'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', {
      nome:{type: Sequelize.STRING},
      preco:{type: Sequelize.FLOAT},
      cor:{type: Sequelize.STRING},
      tamanho:{type: Sequelize.STRING},
      marca:{type: Sequelize.STRING},
      img1:{type: Sequelize.STRING},
      img2:{type: Sequelize.STRING},
      img3:{type: Sequelize.STRING},
      img4:{type: Sequelize.STRING},
      qtd_estoque:{type: Sequelize.INTEGER},
      categorias_id:{type: Sequelize.INTEGER},
      descricao:{type: Sequelize.STRING},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');
  }
};
