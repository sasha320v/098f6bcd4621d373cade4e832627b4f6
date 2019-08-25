'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    space: DataTypes.STRING,
    color: DataTypes.STRING,
    app_id: DataTypes.INTEGER
  }, {});
  room.associate = function(models) {

    room.belongsTo(models.apartment, {
      foreignKey: 'app_id'
    });

    room.hasMany(models.user, {
      foreignKey: 'room_id',
      as: 'user',
    });

  };
  return room;
};