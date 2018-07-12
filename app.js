const express = require('express');
const app = express();
const morgan = require('morgan');

const carRoutes = require('./api/routes/cars');
const passengerRoutes = require('./api/routes/passengers');
const demandRoutes = require('./api/routes/demands');

app.use(morgan('dev'));

// Routes which should handle requests
app.use('/cars', carRoutes);
app.use('/passengers', passengerRoutes);
app.use('/demands', demandRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;