'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      { name: 'Admin', description: 'Administrator with full permissions', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Operator', description: 'Operator with limited access', createdAt: new Date(), updatedAt: new Date() },
      { name: 'User', description: 'Common user', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', {
      name: ['Admin', 'Operator', 'User']
    }, {});
  }
};
