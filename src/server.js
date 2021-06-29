'use strict';

// installed dependencies 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./middlewares/logger');
const notFoundHandler = require('./error-handlers/404');
const errorHandeler = require('./error-handlers/500');
const foodHandler = require('./routes/food');
const clothesHandler = require('./routes/clothes');
const app = express();

// setting up the global middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(logger);

// Using routes middleware
app.use('/food', foodHandler);
app.use('/clothes', clothesHandler);

// endpoints
app.get('/', (req, res) => {
  res.send('Hello World');
});

// initialize the start function
const start = (port) => {
  app.listen(port, () => {
    console.log(`server is working on ${port}`);
  });
};

app.use('*', notFoundHandler);
app.use(errorHandeler);

module.exports = {
  server: app,
  start: start,
};
