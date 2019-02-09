const fs = require('fs')
const { Middleware } = require('../core/middleware')
const auth = require('../controllers/authentication').Authentication

const route = (app,recaptcha,md) => {
    app.get('/api/login',(req,res) => {
        auth.login(req,res)
    })

    app.post("/api/register",(req,res) => {
        auth.register(req,res)
    })
}


module.exports = { route }