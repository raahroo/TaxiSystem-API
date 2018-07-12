const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Demands were fetched'
    });
});

router.post('/', (req,res,next)=>{
    const demand = {
        passengerId: req.body.passengerId,
        cardId: req.body.carId,
        activeDemand: true
    }
    res.status(201).json({
        message: 'Demand created',
        demand: demand
    });
});

router.get('/:demandId', (req,res,next) =>{
    res.status(200).json({
        message: 'Demand Details',
        demandId: req.params.demandId
    });
});

router.patch('/:demandId', (req,res,next) =>{
    res.status(200).json({
        message: 'Updated Demand',
    });
});

router.delete('/:demandId', (req,res,next) =>{
    res.status(200).json({
        message: 'Demand Deleted',
        demandId: req.params.demandId
    });
});

module.exports = router;