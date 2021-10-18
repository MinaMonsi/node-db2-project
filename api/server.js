const express = require("express");
//requiring the router
const carsRouter = require('./cars/cars-router')
const server = express();

// DO YOUR MAGIC
server.use(express.json());
server.use('/api/cars', carsRouter)

//test endpoint
server.use('*',(req,res,next)=>{
    res.status(404).json({message: "Not found"});
    next()
}); 
server.use((err, req, res, next)=> {
    res.status(err.status || 500).json({
        message: err.message
    })
    next()
})
module.exports = server;
