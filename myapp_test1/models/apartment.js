'use strict';
module.exports = (sequelize, DataTypes) => {
  const apartment = sequelize.define('apartment', {
    user: DataTypes.STRING,
    user_name: DataTypes.STRING,
    house_id: DataTypes.INTEGER
  }, {});
  apartment.associate = function(models) {
    apartment.belongsTo(models.house, {
      foreignKey: 'house_id'
    });

    apartment.hasMany(models.room, {
      foreignKey: 'app_id',
      as: 'room',
    });

  };
  return apartment;
};