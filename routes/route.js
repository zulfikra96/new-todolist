const fs = require('fs')
const { Middleware } = require('../core/middleware')
const auth = require('../controllers/authentication').Authentication
const todo = require('../controllers/todo').Todo

const route = (app,recaptcha,md) => {
    app.post('/api/login',(req,res) => {
        auth.login(req,res)
    })

    app.post("/api/register",(req,res) => {
        auth.register(req,res)
    })

    app.post("/api/create",(req,res) => {
        md.tokenVerify(req,res,(session) => {
            todo.createTodo(req,res,session)
        },['pengguna'])
    })
}


module.exports = { route }