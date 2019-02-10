const home = {
    main:function()
    {
        render(/*html*/`
            <div class="modal" id="add-new">
                <a href="#close" class="modal-overlay" aria-label="Close"></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
               
                </div>
                <div class="modal-body">
                    <div class="content">
                        <form action="" v-on:submit.prevent="postTodo()">
                            <div class="form-group" >
                                <label for="">Judul</label>
                                <input type="text" class="form-input" v-model="todo.title">
                            </div>
                            <div class="form-group">
                                <label for="">Deskripsi</label>
                                <textarea name="" id="" cols="30" rows="10" v-model="todo.description" class="form-input"></textarea>
                            </div>
                            <div class="form-group">
                                <div class="columns">
                                    <div class="column col-6">
                                        <label for="">Tanggal Mulai</label>
                                        <input type="date" class="form-input" v-model="todo.date_start">
                                    </div>
                                    <div class="column col-6">
                                        <label for="">Tanggal Selesai</label>
                                        <input type="date" class="form-input" v-model="todo.date_end">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <br>
                                <button class="btn btn-primary btn-block">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
                </div>
            </div>
            <header class="navbar" style="background-color:#3F51B5;height:60px;">
                <section class="navbar-section" >
                <a href="#" class="btn btn-link" style="color:#fff;">Home</a>
                </section>
            </header>
            <div class="container">
                <div class="columns">
                    <div class="column col-12">
                        <span>hello </span>
                    </div>
                </div>
                <div class="columns" style="position:absolute;bottom:10px;width:100%;">
                    <div class="column col-12">
                        <button class="btn btn-primary btn-block" v-on:click="openClose('add-new')">Tambah</button>
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
            data() {
                return {
                    todo:{
                        title:'',
                        description:'',
                        date_start:'',
                        date_end:''
                    }
                }
            },
            methods: {
                async postTodo()
                {
                    console.log(localStorage.getItem('token'));
                    
                    let response = await fetch(`${static_data.domain}/create`,{
                         method:'POST',
                         credentials:'same-origin',
                         headers:new Headers({
                             'content-type':'application/json',
                             _token:localStorage.getItem('token')
                         }),
                         body:JSON.stringify(this.data)
                    })
                    let data = await response.json()
                    console.log(data);
                     
                  
                    
                }
            },
        })
    }
}