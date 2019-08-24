'use strict';
module.exports = (sequelize, DataTypes) => {
  const house = sequelize.define('house', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  house.associate = function(models) {
    house.hasMany(models.apartment, {
      foreignKey: 'house_id',
      as: 'apartment',
    });
  };
  return house;
};