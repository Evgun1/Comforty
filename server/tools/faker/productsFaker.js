const { faker } = require("@faker-js/faker");
const { Products } = require("../../entity");

async function productsFaker() {
  for (let index = 0; index <= 100; index++) {
    const element = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 1, max: 1000 }),
    };

    await Products.create(element);
  }
}

module.exports = productsFaker;
