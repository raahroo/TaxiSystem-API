const express = require('express');
const router = express.Router();


// Handle incoming GET requests to /cars
router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Handling GET request to /schedules'
    });
});

router.post('/', (req,res,cars,next)=>{
    const schedule = {
        Demand_ID: req.body.Demand_ID,
        Car_features: req.body.Car_features,
        PickUp_location: req.body.PickUp_location,
        DropOff_location: req.body.DropOff_location,
        Earliest_pickUp_time: req.body.Earliest_pickUp_time,
        Latest_dropOff_time: req.body.Latest_dropOff_time
    }

    //Try something with Haversine Formula.

    res.status(200).json({
        message: 'Handling POST request to /schedules',
        createdPassenger: schedule
    });
});

router.get('/:scheduleId', (req,res,next) =>{
    const id = req.params.carId;
    if( id === 'special'){
        res.status(200).json({
            message: 'You discoverd the special ID',
            carId: id
        });
    } else {
        res.status(200).json({
            message: 'You passed and Id'
        });
    }
});

router.patch('/:scheduleId', (req,res,next) =>{
    res.status(200).json({
        message: 'Updated scheduleId',
    });
});

router.delete('/:scheduleId', (err,req,res,next) => {
    res.status(500).json({
        error: 'err',
        message: 'You cannot delete this passenger because he has an active booking',
    });
});

module.exports = router;