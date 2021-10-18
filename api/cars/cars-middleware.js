//importing cars-model
const Car = require('./cars-model')
//requiring npm module: vin validator
const vin = require('vin-validator')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}