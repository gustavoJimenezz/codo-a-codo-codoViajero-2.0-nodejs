'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('detailExcursionImages', [
      // Excursion Córdoba 1
      {
        excursion_id: 1,
        img: 'excursion-cordoba-1/Los-Gigantes-1_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'excursion-cordoba-1/Los-Gigantes-2_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'excursion-cordoba-1/Sierras-Trekking-2_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'excursion-cordoba-1/Sierras-Trekking-3_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 1,
        img: 'excursion-cordoba-1/Sierras-Trekking-4_resize.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Córdoba 2
      {
        excursion_id: 2,
        img: 'excursion-cordoba-2/excursion-cordoba-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 2,
        img: 'excursion-cordoba-2/excursion-cordoba-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 2,
        img: 'excursion-cordoba-2/excursion-cordoba-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 2,
        img: 'excursion-cordoba-2/excursion-cordoba-4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Mendoza 1
      {
        excursion_id: 3,
        img: 'excirsion-mendoza-1/excirsion-mendoza-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 3,
        img: 'excirsion-mendoza-1/excirsion-mendoza-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 3,
        img: 'excirsion-mendoza-1/excirsion-mendoza-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Mendoza 2
      {
        excursion_id: 4,
        img: 'excursion-mendoza-2/excursion-mendoza-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 4,
        img: 'excursion-mendoza-2/excursion-mendoza-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 4,
        img: 'excursion-mendoza-2/excursion-mendoza-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Bariloche 1
      {
        excursion_id: 5,
        img: 'excursion-bariloche-1/excursion-bariloche-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 5,
        img: 'excursion-bariloche-1/excursion-bariloche-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 5,
        img: 'excursion-bariloche-1/excursion-bariloche-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Bariloche 2
      {
        excursion_id: 6,
        img: 'excursion-bariloche-2/excursion-bariloche-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 6,
        img: 'excursion-bariloche-2/excursion-bariloche-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 6,
        img: 'excursion-bariloche-2/excursion-bariloche-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Salta 1
      {
        excursion_id: 7,
        img: 'excursion-salta-1/excursion-salta-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 7,
        img: 'excursion-salta-1/excursion-salta-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 7,
        img: 'excursion-salta-1/excursion-salta-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Salta 2
      {
        excursion_id: 8,
        img: 'excursion-salta-2/excursion-salta-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 8,
        img: 'excursion-salta-2/excursion-salta-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 8,
        img: 'excursion-salta-2/excursion-salta-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Rosario 1
      {
        excursion_id: 9,
        img: 'excursion-rosario-1/excursion-rosario-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 9,
        img: 'excursion-rosario-1/excursion-rosario-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 9,
        img: 'excursion-rosario-1/excursion-rosario-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Rosario 2
      {
        excursion_id: 10,
        img: 'excursion-rosario-2/excursion-rosario-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 10,
        img: 'excursion-rosario-2/excursion-rosario-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 10,
        img: 'excursion-rosario-2/excursion-rosario-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Ushuaia 1
      {
        excursion_id: 11,
        img: 'excursion-ushuaia-1/excursion-ushuaia-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 11,
        img: 'excursion-ushuaia-1/excursion-ushuaia-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Excursion Ushuaia 2
      {
        excursion_id: 12,
        img: 'excursion-ushuaia-2/excursion-ushuaia-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 12,
        img: 'excursion-ushuaia-2/excursion-ushuaia-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        excursion_id: 12,
        img: 'excursion-ushuaia-2/excursion-ushuaia-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('detailExcursionImages', {
      excursion_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }, {});
  }
};
