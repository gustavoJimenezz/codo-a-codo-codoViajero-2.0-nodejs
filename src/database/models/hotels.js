'use strict';

const { Model, DataTypes } = require('sequelize');

class Hotel extends Model {
  static associate(models) {
    Hotel.belongsTo(models.TouristDestination,{
        foreignKey: 'touristDestinationId',
    })
  }
}

const initHotel = (sequelize) => {
  Hotel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    tourist_destination_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "tourist-destinations",
        key: "id",
      },
    },
  }, {
    sequelize,
    tableName: 'hotels',
    timestamps: false,
  });

  return Hotel;
};

module.exports = initHotel;
