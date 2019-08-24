'use strict';
module.exports = (sequelize, DataTypes) => {
  const baggage = sequelize.define('baggage', {
    mass: DataTypes.STRING,
    size: DataTypes.STRING
  }, {});
  baggage.associate = function(models) {

    baggage.hasMany(models.car, {
      foreignKey: 'bag_id',
      as: 'car',
    });

  };
  return baggage;
};