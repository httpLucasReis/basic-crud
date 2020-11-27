const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },

    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    }, 

    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
