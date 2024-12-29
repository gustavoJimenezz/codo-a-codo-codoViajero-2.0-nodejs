'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('excursions', 'price');
    await queryInterface.removeColumn('excursions', 'duration');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('excursions', 'price', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });

    await queryInterface.addColumn('excursions', 'duration', {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: 'Duración en horas o días',
    });
  },
};
