'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('excursionImages', [
      {
        excursion_id: 1,
        img: 'Los-Gigantes-1_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'Los-Gigantes-2_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'Sierras-Trekking-2_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'Sierras-Trekking-3_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'Sierras-Trekking-4_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('excursionImages', {
      excursion_id: 1
    }, {});
  }
};
