const Router = require("koa-router");
const { homePage } = require("./Controllers/homePage");
const { createProducts } = require("./Controllers/products");

const router = new Router();

router.post("/products", createProducts);
router.get("/", homePage);

module.exports = router; 