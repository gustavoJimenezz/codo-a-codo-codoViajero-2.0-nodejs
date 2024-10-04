'use strict';

const { Model, DataTypes } = require('sequelize');

class Excursions extends Model {}

const initExcursions = (sequelize) => {
    Excursions.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER // Cambiar a DataTypes
        },
        name: {
            type: DataTypes.STRING, // Cambiar a DataTypes
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT, // Cambiar a DataTypes
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER, // Cambiar a DataTypes
            allowNull: false,
            comment: 'Duración en horas o días'
        },
        price: {
            type: DataTypes.FLOAT, // Cambiar a DataTypes
            allowNull: false
        },
        img: {
            type: DataTypes.STRING, // Cambiar a DataTypes
            allowNull: true,
            comment: 'URL de la imagen de la excursión'
        },
        destination_id: {
            type: DataTypes.INTEGER, // Cambiar a DataTypes
            allowNull: false,
            references: {
                model: 'tourist_destinations', // Cambia a 'tourist_destinations' si la tabla se llama así
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL' // Considera agregar esta opción para manejar eliminaciones
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE // Cambiar a DataTypes
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE // Cambiar a DataTypes
        }
    }, {
        sequelize,
        tableName: 'excursiones',
        timestamps: false,
    });
    return Excursions;
}

module.exports = initExcursions; // Exportar el modelo también
