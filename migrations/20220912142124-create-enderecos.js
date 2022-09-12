'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      endereco_fatura:{type: Sequelize.STRING},
      endereco_entrega:{type: Sequelize.STRING}
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};
