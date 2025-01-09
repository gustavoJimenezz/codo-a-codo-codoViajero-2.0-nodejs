'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('availabilities', 'excursion_id', { 
      
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'excursions',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('availabilities', 'excursion_id');
    
  }
};
