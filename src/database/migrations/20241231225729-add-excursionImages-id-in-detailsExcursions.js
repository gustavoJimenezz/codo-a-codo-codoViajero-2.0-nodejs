'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('excursionImages', 'excursionImages_id', {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'excursionImages',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('excursionImages', 'excursionImages_id'); 
  }
};
