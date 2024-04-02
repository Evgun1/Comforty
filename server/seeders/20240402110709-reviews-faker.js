"use strict";
const { faker } = require("@faker-js/faker");
const sequelize = require("../db");
const Products = require("../models/products");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const reviewsArr = [];
    const products = Products(sequelize, Sequelize.DataTypes);
    const result = await products.findAll({ attributes: ["id"] });
    const productId = result.map((value) => value.dataValues.id);

    for (let index = 0; index < productId.length; index++) {
      const randomIndexProducts = Math.floor(Math.random() * productId.length);
      const product_id = productId[randomIndexProducts];

      const randomNumberRating = Math.floor(Math.random() * 5 + 1);

      const element = {
        product_id,
        rating: randomNumberRating,
        text: faker.lorem.text(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      reviewsArr.push(element);
    }

    await queryInterface.bulkInsert("Reviews", reviewsArr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null);
  },
};
