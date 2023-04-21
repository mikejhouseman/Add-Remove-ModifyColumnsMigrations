'use strict';
//phase two:
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addConstraint('Colors', {
    type: "unique",
    fields: ["name"],
    name: "unique-color"
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeConstraint('Colors', "unique-color", {});

  }
};
