const express = require('express');
const router = express.Router();


// Handle incoming GET requests to /cars
router.get('/', (rq,res,next)=>{
    res.status(200).json({
        message: 'Handling GET request to /passengers'
    });
});

router.post('/', (rq,res,next)=>{
    res.status(200).json({
        message: 'Handling POST request to /passengers'
    });
});

router.get('/:passegerId', (req,res,next) =>{
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

router.patch('/:passegerId', (req,res,next) =>{
    res.status(200).json({
        message: 'Updated Passenger',
    });
});

router.delete('/:passegerId', (req,res,next) =>{
    res.status(200).json({
        message: 'Deleted Passenger',
    });
});

module.exports = router;