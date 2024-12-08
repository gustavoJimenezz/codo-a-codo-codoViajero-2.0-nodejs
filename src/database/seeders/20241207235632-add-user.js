'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
        name: 'admin',
        lastname: `superadmin`,
        email: `admin@gmail.com`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]
    );
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', {
      name: 'admin'
     });
     
  }
};
