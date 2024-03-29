"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const brandArr = [];

    for (let index = 1; index <= 10; index++) {
      const element = {
        name: faker.commerce.department(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      brandArr.push(element);
    }

    await queryInterface.bulkInsert("Brands", brandArr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null);
  },
};
