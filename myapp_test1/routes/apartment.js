var express = require('express');
var router = express.Router();
var {apartment, house, room} = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {

    return apartment.findAll({
        include: [{
            model: house,
            as: 'house',
            attributes: ['name', 'address'],
        },{
            model: room,
            as: 'room',
            attributes: ['space']
        }]
    })
        .then( (data) => {
            res.status(200).send(data);
        })
        .catch( (error) => {
            res.status(400).send(error);
        });

});

module.exports = router;
