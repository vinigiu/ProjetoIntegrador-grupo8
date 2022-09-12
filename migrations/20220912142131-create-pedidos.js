'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarios_id:{type: Sequelize.STRING},
      valor_final:{type: Sequelize.FLOAT},
      dados_pagamentos_id:{type: Sequelize.INTEGER},
      status_id:{type: Sequelize.INTEGER},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedidos');
  }
};
