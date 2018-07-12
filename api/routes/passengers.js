const express = require('express');
const router = express.Router();


// Handle incoming GET requests to /cars
router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Handling GET request to /passengers'
    });
});

router.post('/', (req,res,next)=>{
    const passenger = {
        name: req.body.firstName,
        lastName: req.body.lastName,
    }
    res.status(200).json({
        message: 'Handling POST request to /passengers',
        createdPassenger: passenger
    });
});

router.get('/:passengerId', (req,res,next) =>{
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

router.patch('/:passengerId', (req,res,next) =>{
    res.status(200).json({
        message: 'Updated Passenger',
    });
});

router.delete('/:passengerId', (err,req,res,next) => {
    let hasBooking;
    if(req.body.demand.activeDemand) {
        hasBooking = req.body.demand.activeDemand;
    } else {
        hasBooking = false;
    }

    if (hasBooking === true) {
        res.status(500).json({
            error: 'err',
            message: 'You cannot delete this passenger because he has an active booking',
        });
    } else {
        res.status(200).json({
            message: 'Deleted Passenger',
        });
    }
    
});

module.exports = router;