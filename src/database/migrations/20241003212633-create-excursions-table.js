'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('excursiones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      duracion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Duración en horas o días'
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'URL de la imagen de la excursión'
      },
      
      destination_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tourist-destinations',
          key: 'id'
        },
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('excursiones');
  }
};
