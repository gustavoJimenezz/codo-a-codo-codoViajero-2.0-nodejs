'use strict';
const models = require('../models/index');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.TouristDestination.findOrCreate({
        where: { id: 1 },
        defaults: {
          city: 'Córdoba',
          description: 'Córdoba, situada en el centro de Argentina, es una ciudad de gran importancia histórica y cultural. Su arquitectura colonial, reflejada en edificios como la Manzana Jesuítica, y su vibrante vida estudiantil gracias a la Universidad Nacional de Córdoba, hacen de esta ciudad un lugar de gran riqueza cultural. Además, Córdoba ofrece hermosos paisajes naturales, desde las sierras hasta los valles y ríos que rodean la ciudad, lo que la convierte en un destino ideal tanto para quienes buscan historia como naturaleza.',
          img: 'cordoba.jpg',
        },
      }),
      models.TouristDestination.findOrCreate({
        where: { id: 2 },
        defaults: {
          city: 'Mendoza',
          description: 'Mendoza es reconocida mundialmente como la capital del vino en Argentina, especialmente famosa por sus bodegas y la producción de Malbec, una variedad de uva emblemática. Ubicada en la región cuyana, al pie de los Andes, Mendoza no solo ofrece degustaciones de vinos, sino también paisajes montañosos impresionantes y actividades al aire libre, como el senderismo y el esquí en el cercano Cerro Aconcagua, la montaña más alta de América del Sur.',
          img: 'mendoza.jpg',
        },
      }),
      models.TouristDestination.findOrCreate({
        where: { id: 3 },
        defaults: {
          city: 'Bariloche',
          description: 'Bariloche, enclavada en la Patagonia argentina, es famosa por sus paisajes naturales de gran belleza. Rodeada de lagos cristalinos y montañas cubiertas de nieve, Bariloche es un destino popular tanto en invierno como en verano. Durante la temporada invernal, se convierte en un centro de esquí de primer nivel, mientras que en verano, sus senderos y lagos atraen a los entusiastas del senderismo y los deportes acuáticos. La ciudad también es conocida por su arquitectura de estilo suizo y su chocolate artesanal.',
          img: 'bariloche.jpg',
        },
      }),
      models.TouristDestination.findOrCreate({
        where: { id: 4 },
        defaults: {
          city: 'Salta',
          description: 'Salta, ubicada en el noroeste de Argentina, es conocida por su impresionante arquitectura colonial y su entorno montañoso. La ciudad es un punto de partida ideal para explorar la región de los Valles Calchaquíes y la Quebrada de las Conchas, con sus formaciones rocosas únicas. Salta también es famosa por su cultura vibrante, sus festivales tradicionales y su cocina regional, que incluye platos típicos como empanadas y locro. El Teleférico de Salta ofrece vistas panorámicas de la ciudad y sus alrededores.',
          img: 'salta.jpg',
        },
      }),
      models.TouristDestination.findOrCreate({
        where: { id: 5 },
        defaults: {
          city: 'Rosario',
          description: 'Rosario, situada a orillas del río Paraná, es una ciudad dinámica con una rica vida cultural y nocturna. Es conocida por el Monumento a la Bandera, un imponente monumento conmemorativo dedicado a la bandera nacional argentina. Rosario también es famosa por su animada escena artística y cultural, que incluye teatros, museos y festivales. Además, la ciudad ofrece una gran variedad de restaurantes, bares y eventos que la convierten en un destino vibrante para turistas y residentes por igual.',
          img: 'rosario.jpg',
        },
      }),
      models.TouristDestination.findOrCreate({
        where: { id: 6 },
        defaults: {
          city: 'Ushuaia',
          description: 'Ushuaia, conocida como la ciudad más austral del mundo, es un destino espectacular en el extremo sur de Argentina. Situada en la Tierra del Fuego, Ushuaia es famosa por sus paisajes impresionantes, que incluyen montañas, bosques y glaciares. Es un punto de partida para explorar el Parque Nacional Tierra del Fuego y para embarcarse en cruceros hacia la Antártida. Ushuaia también ofrece una variedad de actividades al aire libre, desde excursiones en barco hasta caminatas y esquí, todo en un entorno natural incomparable.',
          img: 'ushuaia.jpg',
        },
      }),
      models.TouristDestination.findOrCreate({
        where: { id: 7 },
        defaults: {
          city: 'Mar del Plata',
          description: 'Mar del Plata es uno de los destinos turísticos más populares en la costa atlántica de Argentina. Conocida por sus extensas playas de arena y su animada vida veraniega, la ciudad atrae a turistas de todas partes del país y del extranjero. Además de sus playas, Mar del Plata ofrece una vibrante vida nocturna, con numerosos bares y clubes, así como una oferta cultural que incluye teatros y festivales. La ciudad también es famosa por sus eventos deportivos y su amplia gama de restaurantes que sirven mariscos frescos y otros platos regionales.',
          img: 'mar_del_plata.jpg',
        },
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('TouristDestinations', null, {});
     */
  }
};
