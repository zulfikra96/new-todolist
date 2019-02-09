const { Controller } = require('./controller')
const { UsersModel } = require('../models/users')

class Authentication extends Controller{


    constructor()
    {
        super()
        this.users = new UsersModel()
    }

    login(req,res)
    {
        
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