"use strict"
const { Database } = require('../core/database.js')
const rand = require('randomstring')

class TodoModel extends Database {

   async createTodo(data)
   {
        data = await this.Insert('todo')
        .Columns(data)
        .SetAsync()
        .catch((err) => {
            console.log(err);
            
        })
        return data
   }
    
}

module.exports = { TodoModel }


