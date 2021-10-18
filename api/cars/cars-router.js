const express = require('express');
//Importing cars-model to gain access to functions
const Car = require('./cars-model')

const router = express.Router();

router.get('/', async (req,res,next)=>{
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err){
        next(err)
    }
})

 router.get('/id', async (req,res,next)=>{
     res.json(`getting cars with id ${req.params.id}`)
     next()
 })

 router.get('/', async (req,res,next)=>{
    res.json('posting new car')
    next()
})

module.exports = router
