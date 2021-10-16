// STRETCH

exports.seed = function (knex){
    return("cars").truncate()
    .then(function () {
        return knex("cars").insert([
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
        ])
    })
}