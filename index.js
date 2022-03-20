const Koa = require("koa");
const koaBody = require("koa-body")
const router = require("./router");

const app = new Koa();

app.use(koaBody());
app.use(router.routes());

app.listen(3000, () =>{
    console.log("Listening to port:3200");
});