exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl =>{
    // creates a primary key called id automatically
    tbl.increments()
    //info taken from metadata 
    tbl.string('vin', 17).notNullable().unique()
    tbl.string('make', 128).notNullable()
    tbl.string('model', 130).notNullable()
    //unsigned ensures that mileage isn't a negative number
    tbl.integer('mileage').unsigned().notNullable()
    tbl.string('title', 128)
    tbl.string('transmission', 128)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
