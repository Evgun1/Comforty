const Router = require("express");
const ProductsController = require("../controllers/Products.controller");

const router = new Router();

router.get("/", ProductsController.getAll);

module.exports = router;
