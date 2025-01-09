'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailsExcursions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Excursion, {
        foreignKey: 'id',
      });
    }
  }
  DetailsExcursions.init({
    
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    excursion_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'excursions',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    excursionImages_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'excursionImages',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Duration for hours or days',
    },
    price: {
      type: DataTypes.FLOAT,
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
    tableName: 'detailsExcursions',
    timestamps: true,
    freezeTableName: true, 
    paranoid: true,
  });
  return DetailsExcursions;
};