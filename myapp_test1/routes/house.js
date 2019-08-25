var express = require('express');
var router = express.Router();
var {house, apartment, room, user} = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {

    return house.findAll({
        where: house.id = 1,
        include: [{
            model: apartment,
            as: 'apartment',
            attributes: ['user_name'],
            include: [{
                model: room,
                as: 'room',
                attributes: ['space'],
                include: [{
                    model: user,
                    as: 'user',
                    attributes: ['name']
                }]
            }]
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