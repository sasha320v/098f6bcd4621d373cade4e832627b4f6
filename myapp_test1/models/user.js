'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    room_id: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {

    user.belongsTo(models.room, {
      foreignKey: 'room_id'
    });

  };
  return user;
};