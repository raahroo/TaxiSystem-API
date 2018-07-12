const express = require('express');
const app = express();

const carRoutes = require('./api/routes/cars');
const carDemands = require('./api/routes/demands');

app.use('/cars', carRoutes);
app.use('/demands', carDemands);

module.exports = app;