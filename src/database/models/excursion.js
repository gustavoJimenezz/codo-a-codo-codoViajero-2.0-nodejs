'use strict';
const {
  Model, DataTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Excursion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Destination, {
          foreignKey: 'destination_id',
        });
    }
  }
  Excursion.init({
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
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'destinations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, 
  {
    sequelize,
    tableName: 'excursions',
    timestamps: true,
    freezeTableName: true, 
    paranoid: true,
  });
  return Excursion;
};