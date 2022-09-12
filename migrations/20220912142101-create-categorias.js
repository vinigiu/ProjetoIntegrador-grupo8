'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categorias', {
      categoria:{type: Sequelize.STRING},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categorias');
  }
};
