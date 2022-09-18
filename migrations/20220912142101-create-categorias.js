'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categorias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria:{type: Sequelize.STRING},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categorias');
  }
};
