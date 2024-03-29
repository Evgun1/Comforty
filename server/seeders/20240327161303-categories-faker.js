"use strict";
const { faker } = require("@faker-js/faker");
const {} = require("../models/categories");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categoriesArr = [];

    for (let index = 1; index <= 10; index++) {
      const element = {
        name: faker.commerce.product(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      categoriesArr.push(element);
    }

    await queryInterface.bulkInsert("Categories", categoriesArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null);
  },
};
