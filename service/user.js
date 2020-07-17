

const allSqlAction = require("../lib/mysql")
async function checkUser(username, password) {
    let sql = `select * from users where username = ${username} and password=${password}`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 1 && res[0].username === username && password === password) {
            return { msg: "登陆成功", code: 200 }
        } else {
            return { msg: "登录失败", code: 201 }
        }
    })
}
async function findUser(username, password) {
    let sql = `select * from users where username = ${username}`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 0) {
            return registerUser(username, password)
        } else {
            return { msg: "用户已存在", code: 202 }
        }
    })
}
async function registerUser(username, password) {
    let sql = `insert into users (username,password) values ('${username}','${password}')`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.affectedRows == 1) {
            return { msg: "注册成功", code: 200 }
        } else {
            return { msg: "注册失败", code: 200 }
        }
    })
}

module.exports = {
    checkUser,
    findUser,
    registerUser
}