//requiring db so that cars-model gains acces to the cars db
const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create
}