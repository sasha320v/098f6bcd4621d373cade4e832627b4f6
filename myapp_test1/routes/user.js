var express = require('express');
var router = express.Router();
var {house, apartment, room, user} = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

    return user.findAll({
        where: user.id = 1,
        include: [{
            model: room,
            as: 'room',
            attributes: ['space', 'color'],
            include: [{
                model: apartment,
                as: 'apartment',
                attributes: ['user'],
                include: [{
                    model: house,
                    as: 'house',
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


