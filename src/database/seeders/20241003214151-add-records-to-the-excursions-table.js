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

    await queryInterface.bulkInsert('excursiones', [
      // Córdoba
      {
        nombre: 'Excursión por las Sierras de Córdoba',
        descripcion: 'Una aventura inolvidable por las montañas de Córdoba.',
        duracion: 8,
        precio: 150.00,
        imagen: 'excursion-cordoba-1.jpg',
        destination_id: destinoMap['Córdoba'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Caminata por el Valle de Punilla',
        descripcion: 'Descubre los paisajes increíbles del Valle de Punilla en Córdoba.',
        duracion: 5,
        precio: 100.00,
        imagen: 'excursion-cordoba-2.jpg',
        destination_id: destinoMap['Córdoba'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mendoza
      {
        nombre: 'Tour de vinos en Mendoza',
        descripcion: 'Visita las mejores bodegas de Mendoza y degusta sus vinos.',
        duracion: 6,
        precio: 200.00,
        imagen: 'excursion-mendoza-1.jpg',
        destination_id: destinoMap['Mendoza'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Excursión al Aconcagua',
        descripcion: 'Explora los alrededores del Aconcagua, la montaña más alta de América.',
        duracion: 10,
        precio: 250.00,
        imagen: 'excursion-mendoza-2.jpg',
        destination_id: destinoMap['Mendoza'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bariloche
      {
        nombre: 'Caminata en el Cerro Tronador',
        descripcion: 'Una caminata por los bellos paisajes del Cerro Tronador en Bariloche.',
        duracion: 7,
        precio: 180.00,
        imagen: 'excursion-bariloche-1.jpg',
        destination_id: destinoMap['Bariloche'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Excursión en barco por el Lago Nahuel Huapi',
        descripcion: 'Disfruta de un paseo en barco por el lago más famoso de Bariloche.',
        duracion: 4,
        precio: 120.00,
        imagen: 'excursion-bariloche-2.jpg',
        destination_id: destinoMap['Bariloche'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Salta
      {
        nombre: 'Excursión al Tren a las Nubes',
        descripcion: 'Un recorrido en tren por las alturas de los Andes en Salta.',
        duracion: 12,
        precio: 300.00,
        imagen: 'excursion-salta-1.jpg',
        destination_id: destinoMap['Salta'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tour por la Quebrada de Humahuaca',
        descripcion: 'Explora los paisajes de la Quebrada de Humahuaca en Salta.',
        duracion: 9,
        precio: 180.00,
        imagen: 'excursion-salta-2.jpg',
        destination_id: destinoMap['Salta'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Rosario
      {
        nombre: 'City Tour por Rosario',
        descripcion: 'Descubre los principales puntos turísticos de Rosario en una excursión guiada.',
        duracion: 3,
        precio: 80.00,
        imagen: 'excursion-rosario-1.jpg',
        destination_id: destinoMap['Rosario'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Navegación por el río Paraná',
        descripcion: 'Un paseo en barco por el río Paraná, disfrutando de los paisajes de Rosario.',
        duracion: 5,
        precio: 100.00,
        imagen: 'excursion-rosario-2.jpg',
        destination_id: destinoMap['Rosario'],
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ushuaia
      {
        nombre: 'Excursión al Parque Nacional Tierra del Fuego',
        descripcion: 'Descubre la naturaleza del parque nacional más austral del mundo en Ushuaia.',
        duracion: 6,
        precio: 220.00,
        imagen: 'excursion-ushuaia-1.jpg',
        destination_id: destinoMap['Ushuaia'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Navegación por el Canal Beagle',
        descripcion: 'Explora el Canal Beagle y sus paisajes únicos en Ushuaia.',
        duracion: 4,
        precio: 150.00,
        imagen: 'excursion-ushuaia-2.jpg',
        destination_id: destinoMap['Ushuaia'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('excursiones', null, {});
  }
};
