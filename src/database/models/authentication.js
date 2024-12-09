'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authentication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'usuario_id',
      });
    }
  }
  Authentication.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },      
      deletedAt: {
          type: DataTypes.DATE,
          field: 'deleted_at',
        },
    },
  {
    sequelize,
    tableName: 'authentications',
    timestamps: true,
    paranoid: true,
    freezeTableName: true, 
  });
  return Authentication;
};