var express = require('express');
var router = express.Router();
var {room, user} = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {

    return user.findAll({
        include: [{
            model: room,
            as: 'room',
            attributes: ['space', 'color']
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


