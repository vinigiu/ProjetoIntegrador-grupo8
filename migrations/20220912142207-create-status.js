'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('status',  {
      status:{type: Sequelize.STRING},
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('status');
  }
};
