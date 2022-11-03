// path: ./config/env/production/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'xd'),
      user: env('DATABASE_USERNAME', 'xd'),
      password: env('DATABASE_PASSWORD', 'xd'),
      // ssl: {
      //   ca: env('DATABASE_CA')
      // },
    },
    debug: false,
  },
});

