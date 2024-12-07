'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Excursion, { foreignKey: 'destination_id' });
    }
  }

  Destination.init(
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
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
    }, 
    {
    sequelize,
    tableName: 'destinations',
    timestamps: true,
    paranoid: true,
    freezeTableName: true, 
  }

);
  return Destination;
};