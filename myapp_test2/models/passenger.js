'use strict';
module.exports = (sequelize, DataTypes) => {
  const passenger = sequelize.define('passenger', {
    growth: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {});
  passenger.associate = function(models) {

    passenger.hasMany(models.car, {
      foreignKey: 'pass_id',
      as: 'car',
    });

  };
  return passenger;
};