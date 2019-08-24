var express = require('express');
var router = express.Router();
var {apartment, house} = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {

    return apartment.findAll({
        include: [{
            model: house,
            as: 'house',
            attributes: ['name', 'address']
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