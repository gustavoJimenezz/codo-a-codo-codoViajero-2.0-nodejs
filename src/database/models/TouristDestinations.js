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
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'TouristDestinations',
    timestamps: false,
  });

  return TravelPackage;
};

module.exports = createTravelPackageModel;
