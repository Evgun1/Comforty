"use strict";
const { faker } = require("@faker-js/faker");
const categories = require("../models/categories");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const test = categories().findAll();
    console.log(test);
    const statusArr = ["in stock", "out of stock", "disable"];

    const productsArr = [];

    for (let index = 1; index <= 100; index++) {
      const randomIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      const status = statusArr[randomIndex];
      const element = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price({ min: 1, max: 1000 })),
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
