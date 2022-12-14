// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// strapi-api/config/database.js
//  module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5433),
//       database: env('DATABASE_NAME', 'car_strapi'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'postgres'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       // ssl: {
//       //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//       // },
//     },
//     debug: false,
//   },
// });
// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'xd'),
      user: env('DATABASE_USERNAME', 'xd'),
      password: env('DATABASE_PASSWORD', 'xd'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      // },
    },
    debug: false,
  },
});