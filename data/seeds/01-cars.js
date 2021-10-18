// STRETCH
const cars = [
    {
        vin: 'JS1GT75A632153453',
        make: 'toyota',
        model: 'prius',
        mileage: '215000',
        title: 'clean',
        transmission:'manual'
    },
    {
        vin: '1FMFK19518LA67186',
        make: 'toyota',
        model: 'corolla',
        mileage: '115000',
        title: 'clean',
        transmission:'salvage'
    },
    {
        vin: '1FMEU74EX8UA92212',
        make: 'toyota',
        model: 'focus',
        mileage: '215000',
        title: 'clean',
    },
]
exports.seed = async function (knex){
    await knex ('cars').truncate()
    return knex('cars').insert(cars)
}