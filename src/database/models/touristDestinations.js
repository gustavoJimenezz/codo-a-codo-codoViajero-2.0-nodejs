'use strict';

const { Model, DataTypes } = require('sequelize');

class TouristDestination extends Model {
  static associate(models) {
    TouristDestination.hasMany(models.Hotel, {
      foreignKey: 'tourist_destination_id',
    });
  }
}

const initTouristDestination = (sequelize) => {
  TouristDestination.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    tableName: 'tourist-destinations',
    timestamps: false,
  });

  return TouristDestination;
};

module.exports = initTouristDestination;
