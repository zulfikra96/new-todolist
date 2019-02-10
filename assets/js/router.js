

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
    home.main()
        .controller()
});


router.addUriListener();
router.check()