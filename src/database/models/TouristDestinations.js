const { Model, DataTypes } = require('sequelize');

const createTouristDestinations= (sequelize) => {
  class TouristDestination extends Model { }

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
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'TouristDestinations',
    timestamps: false,
  });

  return TouristDestination;
};

module.exports = createTouristDestinations;
