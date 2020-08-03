
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Image, {
      foreignKey: 'userId',
      as: 'images',
    });
  };
  return User;
};