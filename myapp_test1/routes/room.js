var express = require('express');
var router = express.Router();
var {room, apartment} = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {

    return room.findAll({
        include: [{
            model: apartment,
            as: 'apartment',
            attributes: ['user', 'user_name']
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


