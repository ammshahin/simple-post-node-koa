const Router = require("koa-router");
const { createProducts } = require("./Controllers/products");

const router = new Router();

router.post("/products", createProducts)


module.exports = router; 