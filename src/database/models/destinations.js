'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destinations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Excursions, { foreignKey: 'destination_id' });
    }
  }

  Destinations.init(
    {
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
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }, 
    {
    sequelize,
    modelName: 'Destinations',
    timestamps: 'true',
    freezeTableName: true, 
  }

);
  return Destinations;
};