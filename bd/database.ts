import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('codo_viajero', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql',
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successful Connection');
    } catch (error) {
        console.error('Connection error:', error);
    }
};

connectToDatabase();
export default sequelize;