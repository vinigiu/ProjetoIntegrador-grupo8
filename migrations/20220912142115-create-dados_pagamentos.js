'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dados_pagamentos', {
      forma_pagamento:{type: Sequelize.STRING},
      bandeira_cartao:{type: Sequelize.STRING}
  });

  },

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dados_pagamentos');
  }
};
