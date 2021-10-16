const express = require("express");

const server = express();

// DO YOUR MAGIC
server.use(express.json());

// test endpoint
server.use('*',(req,res)=>{
    res.send("API is running");
}); 

module.exports = server;
