var express = require('express');
var router = express.Router();
var {car, baggage, driver, passenger} = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {

    return car.findAll({
        include: [{
            model: baggage,
            as: 'baggage',
            attributes: ['mass']
        },{
            model: driver,
            as: 'driver',
            attributes: ['name']
        },{
            model: passenger,
            as: 'passenger',
            attributes: ['weight']
        }]
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(400).send(error);
        });

});

module.exports = router;
