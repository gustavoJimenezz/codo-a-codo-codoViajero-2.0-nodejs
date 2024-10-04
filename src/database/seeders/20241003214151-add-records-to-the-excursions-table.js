'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [destinos] = await queryInterface.sequelize.query(
      'SELECT id, city FROM `tourist-destinations`;'
    );

    const destinoMap = destinos.reduce((map, destino) => {
      map[destino.city] = destino.id;
      return map;
    }, {});

    await queryInterface.bulkInsert('excursions', [
      // Córdoba
      {
        name: 'Excursión por las Sierras de Córdoba',
        description: 'Una aventura inolvidable por las montañas de Córdoba.',
        duration: 8,
        price: 150.00,
        img: 'excursion-cordoba-1.jpg',
        destination_id: destinoMap['Córdoba'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caminata por el Valle de Punilla',
        description: 'Descubre los paisajes increíbles del Valle de Punilla en Córdoba.',
        duration: 5,
        price: 100.00,
        img: 'excursion-cordoba-2.jpg',
        destination_id: destinoMap['Córdoba'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mendoza
      {
        name: 'Tour de vinos en Mendoza',
        description: 'Visita las mejores bodegas de Mendoza y degusta sus vinos.',
        duration: 6,
        price: 200.00,
        img: 'excursion-mendoza-1.jpg',
        destination_id: destinoMap['Mendoza'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Excursión al Aconcagua',
        description: 'Explora los alrededores del Aconcagua, la montaña más alta de América.',
        duration: 10,
        price: 250.00,
        img: 'excursion-mendoza-2.jpg',
        destination_id: destinoMap['Mendoza'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bariloche
      {
        name: 'Caminata en el Cerro Tronador',
        description: 'Una caminata por los bellos paisajes del Cerro Tronador en Bariloche.',
        duration: 7,
        price: 180.00,
        img: 'excursion-bariloche-1.jpg',
        destination_id: destinoMap['Bariloche'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Excursión en barco por el Lago Nahuel Huapi',
        description: 'Disfruta de un paseo en barco por el lago más famoso de Bariloche.',
        duration: 4,
        price: 120.00,
        img: 'excursion-bariloche-2.jpg',
        destination_id: destinoMap['Bariloche'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Salta
      {
        name: 'Excursión al Tren a las Nubes',
        description: 'Un recorrido en tren por las alturas de los Andes en Salta.',
        duration: 12,
        price: 300.00,
        img: 'excursion-salta-1.jpg',
        destination_id: destinoMap['Salta'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tour por la Quebrada de Humahuaca',
        description: 'Explora los paisajes de la Quebrada de Humahuaca en Salta.',
        duration: 9,
        price: 180.00,
        img: 'excursion-salta-2.jpg',
        destination_id: destinoMap['Salta'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Rosario
      {
        name: 'City Tour por Rosario',
        description: 'Descubre los principales puntos turísticos de Rosario en una excursión guiada.',
        duration: 3,
        price: 80.00,
        img: 'excursion-rosario-1.jpg',
        destination_id: destinoMap['Rosario'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Navegación por el río Paraná',
        description: 'Un paseo en barco por el río Paraná, disfrutando de los paisajes de Rosario.',
        duration: 5,
        price: 100.00,
        img: 'excursion-rosario-2.jpg',
        destination_id: destinoMap['Rosario'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ushuaia
      {
        name: 'Excursión al Parque Nacional Tierra del Fuego',
        description: 'Descubre la naturaleza del parque nacional más austral del mundo en Ushuaia.',
        duration: 6,
        price: 220.00,
        img: 'excursion-ushuaia-1.jpg',
        destination_id: destinoMap['Ushuaia'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Navegación por el Canal Beagle',
        description: 'Explora el Canal Beagle y sus paisajes únicos en Ushuaia.',
        duration: 4,
        price: 150.00,
        img: 'excursion-ushuaia-2.jpg',
        destination_id: destinoMap['Ushuaia'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('excursions', null, {});
  }
};
