'use strict';
module.exports = (sequelize, DataTypes) => {
  const car = sequelize.define('car', {
    color: DataTypes.STRING,
    driver_id: DataTypes.INTEGER,
    pass_id: DataTypes.INTEGER,
    bag_id: DataTypes.INTEGER
  }, {});
  car.associate = function(models) {

    car.belongsTo(models.driver, {
      foreignKey: 'driver_id'
    });

    car.belongsTo(models.passenger, {
      foreignKey: 'pass_id'
    });

    car.belongsTo(models.baggage, {
      foreignKey: 'bag_id'
    });

  };
  return car;
};