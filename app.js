const express = require('express');
const app = express();

const carRoutes = require('./api/routes/cars');
const passengerRoutes = require('./api/routes/passengers');
const demandRoutes = require('./api/routes/demands');

// Routes which should handle requests
app.use('/cars', carRoutes);
app.use('/passengers', passengerRoutes);
app.use('/demands', demandRoutes);

module.exports = app;