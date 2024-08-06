import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import sequelize from "../bd/database";

interface PaqueteAttributes {
    id: number;
    ciudad: string;
    descripcion: string;
    hotel: string;
    precio: number;
    imagen: string;
  }
  
interface PaqueteCreationAttributes extends Optional<PaqueteAttributes, 'id'> {}

class Paquete extends Model<PaqueteAttributes, PaqueteCreationAttributes> implements PaqueteAttributes {
    declare id: number;
    declare ciudad: string;
    declare descripcion: string;
    declare hotel: string;
    declare precio: number;
    declare imagen: string;
}


Paquete.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hotel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'paquetes',
  });

export default Paquete;