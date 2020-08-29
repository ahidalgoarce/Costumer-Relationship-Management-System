const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "CMS API",
        description: "CMS API Information",
        contact: {
          name: "Alejandro Hidalgo"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: ['./api/routes/*.js']
};
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Initialize DB
require('./initDB')();
const PORT = process.env.PORT || 3000;

const UserRoutes = require('./api/routes/userRoutes');
app.use('/user', UserRoutes);

const ClientRoutes = require('./api/routes/clientRoutes');
app.use('/client', ClientRoutes);

//404 handler and pass to error handler
app.use((req, res, next) => {
  /*
  const err = new Error('Not found');
  err.status = 404;
  next(err);
  */
  // You can use the above code if your not using the http-errors module
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});