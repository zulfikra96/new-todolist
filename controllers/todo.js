const { Controller } = require('./controller')
const { Middleware } = require('../core/middleware')
const md = new Middleware()
class Todo extends Controller{


    constructor()
    {
        super()
    }

    createTodo(req,res,session)
    {
        let data = req.body

        console.log(data);
        
    }
   

}

exports.Todo = new Todo()