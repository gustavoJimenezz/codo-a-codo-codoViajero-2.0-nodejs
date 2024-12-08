'use strict';
const globalConst = require('../../constants/globalConst');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash(`admin123`, parseInt(globalConst.ENC_PASSWORD));
    await queryInterface.bulkInsert('authentications', [
      {
        usuario_id: 1,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authentications', {
      id: `1`
    });
  }
};
