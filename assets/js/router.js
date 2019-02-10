

// init router
var router = new Router({
    mode: 'history',
    page404: function (path) {
        return router.navigateTo('/notfound')
    }
});

// router js

router.add('/login', function () {
    login.main()
        .controller()
});

router.add('/home', function () {
    verifyToken(router,() =>{
        home.main()
        .controller()
    },['pengguna'])
});


router.addUriListener();
router.check()