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
        nombre: {
            type: DataTypes.STRING, // Cambiar a DataTypes
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT, // Cambiar a DataTypes
            allowNull: false
        },
        duracion: {
            type: DataTypes.INTEGER, // Cambiar a DataTypes
            allowNull: false,
            comment: 'Duración en horas o días'
        },
        precio: {
            type: DataTypes.FLOAT, // Cambiar a DataTypes
            allowNull: false
        },
        imagen: {
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
        sequelize, // Asegúrate de que la conexión se pasa correctamente
        modelName: 'Excursions', // Especifica el nombre del modelo
        tableName: 'excursiones' // Especifica el nombre de la tabla si es diferente
    });
    return Excursions;
}

module.exports = initExcursions; // Exportar el modelo también
