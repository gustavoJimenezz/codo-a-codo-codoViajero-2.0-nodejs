require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_USR_NAME: process.env.DB_USR_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    ENC_PASSWORD: process.env.ENC_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
}

