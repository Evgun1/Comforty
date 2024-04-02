const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Brands = require("../models/brands");

class BrandsController {
  /**
   * @param {Express.Request} request
   * @param {Express.Response} response
   */
  async getAll(request, response) {
    const brands = Brands(sequelize, DataTypes);
    response.json(brands);
  }
}
