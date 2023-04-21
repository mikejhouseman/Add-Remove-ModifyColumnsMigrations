'use strict';
//phase three:
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.renameColumn('Games', 'numPlayers', 'maxPlayers');
    await queryInterface.removeColumn('Games', 'estPlayTime')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Games', 'maxPlayers', 'numPlayers'); //switch the attributes
    await queryInterface.addColumn('Games', 'estPlayTime', Sequelize.INTEGER)
  }
};
