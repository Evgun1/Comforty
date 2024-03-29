"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasOne(models.Orders);
      Products.hasOne(models.Brands);
      Products.hasOne(models.Cart);
      Products.hasOne(models.Wishlist);
      Products.hasOne(models.Reviews);
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Croducts",
    }
  );
  return Products;

  // products.drop({})
};
