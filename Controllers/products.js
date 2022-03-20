exports.createProducts = ctx =>{
    console.log(
        ctx.params,
        ctx.request.method,
        ctx.query,
        ctx.request.body
    );
    ctx.body = {
        status: 200
    };
};