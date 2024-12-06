'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destinations', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Duración en horas o días',
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'URL de la imagen de la excursión',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
      destination_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'destinations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }
  );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinations');
  }
};