'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('status',  {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status:{type: Sequelize.STRING},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('status');
  }
};
