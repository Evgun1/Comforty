const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Products = sequelize.define("products", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  time: { type: DataTypes.TIME, allowNull: false },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "in stock",
  },
});

const Categories = sequelize.define("categories", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Reviews = sequelize.define("reviews", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  token: { type: DataTypes.TEXT, allowNull: false },
});

const Brands = sequelize.define("brands", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER, allowNull: false },
  token: { type: DataTypes.TEXT, allowNull: false },
});

const WishList = sequelize.define("wishList", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  token: { type: DataTypes.STRING, allowNull: false },
});

const Users = sequelize.define("users", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, alloNull: false, unique: true },
  email: { type: DataTypes.STRING, alloNull: null, unique: true },
  passord: { type: DataTypes.STRING, alloNull: false },
  role: { type: DataTypes.STRING(10), alloNull: false, defaultValue: "user" },
});

Products.hasOne(Categories, {
  foreingKey: {
    name: "category_id",
  },
});

Brands.hasOne(Products, {
  name: "product_id",
});

Cart.hasOne(Products, {
  name: "product_id",
});

Reviews.hasOne(Users, {
  name: "user_id",
});

Reviews.hasOne(Products, {
  name: "product_id",
});

WishList.hasOne(Products, {
  name: "product_id",
});

Products.belongsTo(Cart);
Products.belongsTo(Reviews);
Products.belongsTo(WishList);
Categories.belongsTo(Products);
Users.belongsTo(Reviews);

module.exports = {
  Products,
  Categories,
  Brands,
  Reviews,
  Cart,
  WishList,
  Users,
};
