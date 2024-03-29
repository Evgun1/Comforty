require("dotenv").config();

const sequelize = require("../db");
const categoriesFaker = require("./faker/categoriesFaker");
const productsFaker = require("./faker/productsFaker");
const relation = require("./faker/relation");

async function start() {
  await sequelize.authenticate();
  await categoriesFaker();
  await productsFaker();
  await relation();
  await sequelize.close();
}

start();
