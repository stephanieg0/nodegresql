'use strict';
//a migration helps us define structure of schemas
//for every column we add, we add a migration

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('frienemy',
      {
        name: Sequelize.STRING,
        birthday: Sequelize.STRING
      });

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
