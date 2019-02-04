const { Controller } = require('./controller')


class Authentication extends Controller{


    constructor()
    {
        super()
    }

    login(req,res)
    {
        
    }


    register(req,res,session)
    {

    }

}

exports.Authentication = new Authentication()