'use strict';
const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      models.TravelPackage.findOrCreate({
        where: { id: 1 },
        defaults: {
          city: 'Buenos Aires',
          description: 'La capital de Argentina, famosa por su arquitectura europea y vibrante vida cultural.',
          hotel: 'Hotel Buenos Aires',
          price: 150.0,
          img: 'buenos_aires.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 2 },
        defaults: {
          city: 'Córdoba',
          description: 'Conocida por su arquitectura colonial y la Universidad Nacional de Córdoba, una de las más antiguas de Sudamérica.',
          hotel: 'Hotel Córdoba',
          price: 120.0,
          img: 'cordoba.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 3 },
        defaults: {
          city: 'Mendoza',
          description: 'Famosa por sus bodegas y la producción de vino, especialmente el Malbec.',
          hotel: 'Hotel Mendoza',
          price: 140.0,
          img: 'mendoza.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 4 },
        defaults: {
          city: 'Bariloche',
          description: 'Ubicada en la Patagonia, conocida por su hermosa naturaleza y estaciones de esquí.',
          hotel: 'Hotel Bariloche',
          price: 180.0,
          img: 'bariloche.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 5 },
        defaults: {
          city: 'Salta',
          description: 'Famosa por su arquitectura colonial y paisajes montañosos.',
          hotel: 'Hotel Salta',
          price: 110.0,
          img: 'salta.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 6 },
        defaults: {
          city: 'Rosario',
          description: 'Conocida por el Monumento a la Bandera y su vibrante vida nocturna.',
          hotel: 'Hotel Rosario',
          price: 130.0,
          img: 'rosario.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 7 },
        defaults: {
          city: 'Ushuaia',
          description: 'La ciudad más austral del mundo, conocida por su turismo de aventura y paisajes impresionantes.',
          hotel: 'Hotel Ushuaia',
          price: 200.0,
          img: 'ushuaia.jpg',
        },
      }),
      models.TravelPackage.findOrCreate({
        where: { id: 8 },
        defaults: {
          city: 'Mar del Plata',
          description: 'Popular destino de verano en la costa atlántica, conocida por sus playas.',
          hotel: 'Hotel Mar del Plata',
          price: 125.0,
          img: 'mar_del_plata.jpg',
        },
      })
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
