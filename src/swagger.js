// src/swagger.js

import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Notes API',
    description: 'Description 123',
  },
  host: 'https://zero5-mail-and-img-seqr.onrender.com',
};

const outputFile = './swagger.json';
const routes = [
  './routes/authRoutes.js',
  './routes/notesRoutes.js',
  './routes/userRoutes.js',
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);
