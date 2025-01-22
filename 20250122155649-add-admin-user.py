'use strict';
const globalConst = require('../../constants/globalConst');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar el usuario sin definir el id (autoincremental)
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        lastname: 'superadmin',
        email: 'admin@gmail.com',
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    // Obtener el usuario recién creado
    const user = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE email = 'admin@gmail.com';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (user.length > 0) {
      const hashedPassword = await bcrypt.hash('admin123', parseInt(globalConst.ENC_PASSWORD));
      await queryInterface.bulkInsert('authentications', [
        {
          usuario_id: user[0].id,  // Usar el id recuperado
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    // Eliminar la autenticación primero
    await queryInterface.bulkDelete('authentications', {
      usuario_id: {
        [Sequelize.Op.in]: Sequelize.literal(`(SELECT id FROM users WHERE email = 'admin@gmail.com')`)
      }
    });

    // Luego eliminar el usuario
    await queryInterface.bulkDelete('users', { email: 'admin@gmail.com' });
  }
};
