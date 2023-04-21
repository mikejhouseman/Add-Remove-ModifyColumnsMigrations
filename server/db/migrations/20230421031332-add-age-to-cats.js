'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('Cats', 'age', {

      type: Sequelize.DataTypes.FLOAT });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Cats', 'age');
  }
};
