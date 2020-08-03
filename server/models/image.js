const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    
    
    
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    commentMe: {
      type: DataTypes.INTEGER,           //chekcing for extra column in db table (https://sequelize.org/master/manual/model-basics.html#data-types  column opt)
      
    },
    
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  Image.associate = (models) => {
    Image.belongsTo(models.User, {
      foreignKey: 'userId',
      
      onDelete: 'CASCADE',
    });
  };
  return Image;
};
