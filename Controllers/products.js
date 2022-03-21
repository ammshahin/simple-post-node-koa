const { getProductsFromDb } = require("../Models/products");


exports.createProducts = ctx =>{
    const productFromPost = ctx.request.body;
    const products = getProductsFromDb();
    console.log(products);
    products.push(productFromPost);
    console.log(products);

    ctx.body = {
        status: 200
    };
};