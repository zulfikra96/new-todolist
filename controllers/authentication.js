const { Controller } = require('./controller')
const { UsersModel } = require('../models/users')
const { Middleware } = require('../core/middleware')
const md = new Middleware()
class Authentication extends Controller{


    constructor()
    {
        super()
        this.users = new UsersModel()
    }

    async login(req,res)
    {
        let data = req.body
        let _this = this
        let users = await this.users.getUser({select:['username','password','token'],where:{column:'username',value:`'${data["username"]}'`}})
            .catch((err) => {
                return _this.error(res,"maaf ada sesuatu yang salah")
                console.log(err);  
            })
        if(users.rowCount < 1)
        {
            return this.error(res,"maaf username tidak ditemukan")
        }
        users = users.rows[0]
        let password = this.decrypt(users.password)
        if(data["password"] != password)
        {
            return this.error(res,"maaf password anda salah")
        } 
        delete data["password"]
        console.log(data["username"]);
        
        let token = md.createToken(users)
        let update = await this.users.updateUser({column:`token = '${token}'`,where:`WHERE username = '${data["username"]}'`})
            .catch((err) => {
                
                console.log(err);
                return _this.error(res,"maaf ada sesuatu yang salah")
            })
        
        return res.json({
            token:token
        })
        
    }

    async register(req,res,session)
    {
        let data = req.body
        let _this = this
            data["roles"] = "pengguna"
            data["password"] = this.encryp(data["password"])
        let check = await this.users.getUser({select:['username','roles'],where:{column:'username',value:`'${data["username"]}'`}})
            .catch((err) => {
                console.log(err);
                return _this.error(res,"maaf ada sesuatu yang salah")     
            })

        if(check.rowCount > 0)
        {
            return this.error(res,"maaf username telah digunakan")
        }
        let users = await this.users.insertUser(data).catch((err) => {
            console.log(err);
            return res.status(401).json({
                message:'maaf ada sesuatu yang salah',
                success:false
            })
        })

        if(users.rowCount == 0)
        {
            return res.status(401).json({
                message:'maaf ada sesuatu yang salah',
                success:false
            })
        }

        return res.json({
            message:'success menambah users',
            success:true
        })
    }

}

exports.Authentication = new Authentication()