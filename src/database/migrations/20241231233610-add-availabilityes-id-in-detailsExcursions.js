'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('detailsExcursions', 'availabilityes_id',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'availabilities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('detailsExcursions', 'availabilityes_id')
  }
};
