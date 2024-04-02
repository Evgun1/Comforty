require("dotenv").config();

const sequelize = require("./db");

const express = require("express");
const cors = require("cors");

const router = require("./routes/router");

async function start() {
  try {
    await sequelize.authenticate();

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use( router);
    app.listen(6000, () => {
      console.log("Server was started");
    });

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

start();
