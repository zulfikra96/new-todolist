const login = {
    main:function()
    {
        render(/*html*/`
            
            <div class="modal" id="loading">
                <a href="#close" class="modal-overlay" aria-label="Close"></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
               
                </div>
                <div class="modal-body">
                    <div class="content">
                        <div class="loading loading-lg"></div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
                </div>
            </div>
            <div class="container grid-md margin-top-100">
                <div class="columns">
                    <div class="col-sm-12 column center">
                        <h5>Login</h5>
                        <div class="divider"></div>
                        <form v-on:submit.prevent="postLogin()">
                        <div class="left">
                            <div class="form-group">
                                <label for="">Username</label>
                                <input type="text" class="form-input" v-model="username">
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-input" v-model="password">
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
                async postLogin()
                {
                    openClose('loading')
                    let response = await fetch(`${static_data.domain}/login`,{
                         method:'POST',
                         credentials:'same-origin',
                         headers:new Headers({
                             'content-type':'application/json'
                         }),
                         body:JSON.stringify({
                             username:this.username,
                             password:this.password
                         })
                    })
                    let status = response.status
                    let json = await response.json()
                    if(status == 200)
                    {
                        openClose('loading')
                        localStorage.setItem('token',json.token)
                        router.navigateTo('/home')
                    }
                    
                }
            },
        })
        return this
    }
}