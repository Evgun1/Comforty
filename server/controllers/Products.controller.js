const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Products = require("../models/products");

class ProductsController {
  async getAll(request, response) {
    const products = await Products(sequelize, DataTypes).findAll();
    console.log(products);
    return response.json(products);
  }
}

module.exports = new ProductsController();
