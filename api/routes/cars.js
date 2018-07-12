const express = require('express');
const router = express.Router();

router.get('/', (rq,res,next)=>{
    res.status(200).json({
        message: 'Handling GET request to /cars'
    });
});

router.post('/', (rq,res,next)=>{
    res.status(200).json({
        message: 'Handling POST request to /cars'
    });
});

router.get('/:carId', (req,res,next) =>{
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

router.patch('/:carId', (req,res,next) =>{
    res.status(200).json({
        message: 'Updated Product',
    });
});

router.delete('/:carId', (req,res,next) =>{
    res.status(200).json({
        message: 'Deleted Product',
    });
});

module.exports = router;