"use strict";
const { faker } = require("@faker-js/faker");
// const categories = require("../models/categories");
const sequelize = require("../db");
const Categories = require("../models/categories");
const Brands = require("../models/brands");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const productsArr = [];
    const statusArr = ["in stock", "out of stock", "disable"];

    const categories = Categories(sequelize, Sequelize.DataTypes);
    const result = await categories.findAll({ attributes: ["id"] });
    const categoryId = result.map((value) => value.dataValues.id);

    const brands = Brands(sequelize, Sequelize.DataTypes);
    const resuclt = await brands.findAll({ attributes: ["id"] });
    const brandsId = resuclt.map((value) => value.dataValues.id);

    for (let index = 1; index <= 100; index++) {
      const randomIndexStatus = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      const status = statusArr[randomIndexStatus];

      const randomIndexCategories = Math.floor(
        Math.random() * categoryId.length
      );
      const category_id = parseInt(categoryId[randomIndexCategories]);

      const randomIndexBrands = Math.floor(Math.random() * brandsId.length);
      const brand_id = parseInt(brandsId[randomIndexBrands]);

      const element = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price({ min: 1, max: 1000 })),
        category_id,
        brand_id,
        status,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      productsArr.push(element);
    }

    await queryInterface.bulkInsert("Products", productsArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null);
  },
};
