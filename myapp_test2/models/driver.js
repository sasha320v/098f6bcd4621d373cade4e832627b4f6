'use strict';
module.exports = (sequelize, DataTypes) => {
  const driver = sequelize.define('driver', {
    name: DataTypes.STRING,
    age: DataTypes.STRING
  }, {});
  driver.associate = function(models) {

    driver.hasMany(models.car, {
      foreignKey: 'driver_id',
      as: 'car',
    });

  };
  return driver;
};