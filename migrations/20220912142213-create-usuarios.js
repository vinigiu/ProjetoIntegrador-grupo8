'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      nome:{type: Sequelize.STRING},
      sobrenome:{type: Sequelize.STRING},
      email:{type: Sequelize.STRING},
      senha:{type: Sequelize.STRING},
      data_nasc:{type: Sequelize.DATEONLY},
      cpf:{type: Sequelize.STRING},
      tel:{type: Sequelize.STRING},
      genero:{type: Sequelize.STRING},
      enderecos_id:{type: Sequelize.INTEGER},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
