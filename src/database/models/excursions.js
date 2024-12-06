'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Excursions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Destinations, {
          foreignKey: 'destination_id',
        });
    }
  }
  Excursions.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Duración en horas o días',
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'URL de la imagen de la excursión',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Destinations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, 
  {
    sequelize,
    modelName: 'Excursions',
    timestamps: 'true',
    freezeTableName: true, 
  });
  return Excursions;
};