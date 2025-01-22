'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [excursions] = await queryInterface.sequelize.query(
      'SELECT id, name FROM `excursions`;'
    );

    const excursionMap = excursions.reduce((map, excursion) => {
      map[excursion.name] = excursion.id;
      return map;
    }, {});

    const user = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE email = 'operador@gmail.com';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (user.length > 0) {
      await queryInterface.bulkInsert('detailsExcursions', [
        {
          excursion_id: excursionMap['Excursión por las Sierras de Córdoba'],
          operator_id: user[0].id,
          description: 'Un recorrido espectacular por las Sierras de Córdoba, visitando paisajes naturales únicos, ríos cristalinos y pueblos encantadores. La excursión incluye transporte en bus turístico, almuerzo típico de la región y guía profesional bilingüe. Disfruta de una experiencia auténtica con paradas en miradores panorámicos y tiempo libre para explorar.',
          duration: 8, // horas
          price: 150.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Caminata por el Valle de Punilla'],
          operator_id: user[0].id,
          description: 'Descubre los encantos del Valle de Punilla con una caminata guiada por senderos rodeados de montañas y vegetación autóctona. El recorrido incluye la visita a cascadas escondidas, avistamiento de aves y una experiencia de conexión con la naturaleza en su máxima expresión. Se recomienda llevar calzado cómodo y protección solar.',
          duration: 6, // horas
          price: 120.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Tour de vinos en Mendoza'],
          operator_id: user[0].id,
          description: 'Vive una experiencia sensorial única en Mendoza, recorriendo tres bodegas de renombre internacional. Disfruta de catas de vinos premium, maridadas con quesos y fiambres artesanales. Aprende sobre el proceso de elaboración del vino de la mano de enólogos expertos, en un entorno rodeado de viñedos con vistas a la Cordillera de los Andes.',
          duration: 5, // horas
          price: 200.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Excursión al Aconcagua'],
          operator_id: user[0].id,
          description: 'Embárcate en una travesía inolvidable hacia el coloso de América, el Cerro Aconcagua. Este trekking de dos días incluye pernocte en campamento base, comidas y acompañamiento de guías especializados en alta montaña. Durante la excursión, conocerás sobre la geografía, flora y fauna del parque provincial.',
          duration: 48, // horas
          price: 500.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Caminata en el Cerro Tronador'],
          operator_id: user[0].id,
          description: 'Explora los glaciares del Cerro Tronador en una caminata que te llevará a descubrir sus majestuosas vistas y formaciones de hielo. Durante el recorrido, podrás ver el Ventisquero Negro y escuchar el famoso "trueno" del desprendimiento de los glaciares. La excursión incluye transporte y guía especializado en geología.',
          duration: 7, // horas
          price: 180.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Excursión en barco por el Lago Nahuel Huapi'],
          operator_id: user[0].id,
          description: 'Navega por las aguas cristalinas del Lago Nahuel Huapi en un paseo en barco de lujo, con paradas en la Isla Victoria y el Bosque de Arrayanes. Disfruta de vistas panorámicas, historia local narrada por guías expertos y tiempo libre para recorrer la isla.',
          duration: 3, // horas
          price: 100.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Excursión al Tren a las Nubes'],
          operator_id: user[0].id,
          description: 'Una de las experiencias más emocionantes de Argentina. Viaja en el Tren a las Nubes, atravesando los paisajes andinos y cruzando viaductos impresionantes a más de 4,000 metros sobre el nivel del mar. La excursión incluye paradas en pueblos tradicionales y degustación de platos regionales.',
          duration: 12, // horas
          price: 300.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Tour por la Quebrada de Humahuaca'],
          operator_id: user[0].id,
          description: 'Viaja a través del tiempo en este tour por la Quebrada de Humahuaca, declarada Patrimonio de la Humanidad por la UNESCO. Visita pueblos históricos como Purmamarca, Tilcara y Humahuaca, mientras aprendes sobre la cultura andina y disfrutas de los impresionantes paisajes de cerros multicolores.',
          duration: 10, // horas
          price: 250.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['City Tour por Rosario'],
          operator_id: user[0].id,
          description: 'Conoce la ciudad de Rosario en un tour completo por sus principales atracciones, como el Monumento a la Bandera, el Parque Independencia y la Costanera. Incluye transporte en bus turístico y guía especializado en historia local.',
          duration: 4, // horas
          price: 80.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Navegación por el río Paraná'],
          operator_id: user[0].id,
          description: 'Descubre el encanto del río Paraná en un paseo en barco que te permitirá conocer la flora y fauna autóctona, con vistas espectaculares de las islas y del skyline de la ciudad. Incluye guía turístico a bordo y una copa de bienvenida.',
          duration: 2, // horas
          price: 90.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Excursión al Parque Nacional Tierra del Fuego'],
          operator_id: user[0].id,
          description: 'Una aventura en la naturaleza virgen de la Patagonia. Recorre senderos rodeados de bosques, lagos y montañas, con la posibilidad de avistar castores y zorros. La excursión incluye transporte y guía especializado en biodiversidad.',
          duration: 6, // horas
          price: 220.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          excursion_id: excursionMap['Navegación por el Canal Beagle'],
          operator_id: user[0].id,
          description: 'Navega por las aguas del Canal Beagle, visitando la Isla de los Lobos, la Isla de los Pájaros y el icónico Faro Les Eclaireurs. La excursión ofrece una experiencia única en el fin del mundo, con avistamiento de fauna marina y paisajes inigualables.',
          duration: 4, // horas
          price: 170.00,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('detailsExcursions', null, {});
  }
};
