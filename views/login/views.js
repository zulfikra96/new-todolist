const login = {
    main:function()
    {
        render(/*html*/`
            <div class="container grid-md margin-top-100">
                <div class="columns">
                    <div class="col-sm-12 column center">
                        <h5>Login</h5>
                        <div class="divider"></div>
                        <form action="">
                        <div class="left">
                            <div class="form-group">
                                <label for="">Username</label>
                                <input type="text" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-input">
                            </div>
                        </div>
                        <div class="form-group">
                        <br>
                            <button class="btn btn-primary btn-block">Masuk</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        `)
        return this
    },
    controller:function()
    {
        new Vue({
            el:'#App',
            data:{
                username:'',
                password:''
            },
            methods: {
                postLogin()
                {

                }
            },
        })
        return this
    }
}