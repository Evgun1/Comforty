const { faker } = require("@faker-js/faker");
const { Categories } = require("../../entity");

async function categoriesFaker() {
  for (let index = 0; index <= 10; index++) {
    const element = {
      name: faker.commerce.department(),
    };

    await Categories.create(element);
  }
}

module.exports = categoriesFaker;
