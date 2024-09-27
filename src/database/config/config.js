const globalConst = require('../../constants/globalConst');

module.exports ={
  "development": {
    "username": globalConst.DB_USR_NAME,
    "password": globalConst.DB_PASSWORD || null,
    "database": globalConst.DB_NAME,
    "host": globalConst.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
