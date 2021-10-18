//importing cars-model
const Car = require('./cars-model')
//requiring npm module: vin validator
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
    if(!car){
      next({status: 404, message: `car with id ${id} is not found`})
    }else{
      req.car = car
      next()
    }
  }catch (err){
    next(err)
  }
  
}

const checkCarPayload = (req, res, next) => {
  next()
}

const checkVinNumberValid = (req, res, next) => {
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}