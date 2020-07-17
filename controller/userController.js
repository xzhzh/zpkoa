

const user = require("../service/user")
async function checkLogin(ctx,next){
	console.log(ctx.request.body,222)
    // let {username,password} = ctx.request.body
    // let data = await user.checkUser(username,password)
    return ctx.response.body = ctx.request
}
async function registerUser(ctx,next){
	console.log(ctx.request.body,234234)
    let {username,password} = ctx.request.body
    // let data = await user.findUser(username,password)
    return ctx.response.body = ctx.request.body
}
module.exports={
    checkLogin,
    registerUser
}


