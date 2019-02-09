"use strict"
const { Database } = require('../core/database.js')
const rand = require('randomstring')

class UsersModel extends Database {

   async getDataUser(data)
   {
          
   }
   
   async insertUser(data)
   {
       data = await this.Insert().Into('users')
         .Columns(data)
         .SetAsync().catch((err) => {
            console.log(err);
            
         })
      return data
   }

   async getUser(args = { select:[],where:{ column:'',value:'' } })
   {
      let data = await this.Select(args.select)
         .From('users')
         .Where(args.where)
         .GetAsync().catch((err) => {
            console.log(err);
         })

      return data
   }

   async updateUser(args = { column:'',where:''})
   {
      let data = await this.Update('users')
         .SetColumnAll(args.column)
         .WhereAll(args.where)
         .SetAsync().catch((err) => {
            console.log(err);
         })
      return data
   }
    
}

module.exports = { UsersModel }


