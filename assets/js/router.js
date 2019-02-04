

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


router.addUriListener();
router.check()