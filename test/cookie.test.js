describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            jstools.cookieApi.set('test', 'getTestValue')
        })
        it(`jstools.getCookie('test', 'getTestValue') should return true`, function () {
            assert(jstools.cookieApi.get('test') === 'getTestValue')
        })
        after(function () {
            jstools.cookieApi.remove('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            jstools.cookieApi.set('test', 'removeTestValue')
        })
        it(`jstools.removeCookie('test') should return false`, function () {
            jstools.cookieApi.remove('test')
            assert.notEqual(jstools.cookieApi.get('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`jstools.getCookie('test', 'setCookie') should return true`, function () {
            jstools.cookieApi.set('test', 'setCookie')
            assert(jstools.cookieApi.get('test') === 'setCookie')
        })
        after(function () {
            jstools.cookieApi.remove('test')
        })
    })

    describe('#hasCookie()', function () {
        it(`jstools.hasCookie('test', 'hasCookie') should return true`, function () {
            jstools.cookieApi.set('test', 'hasCookie')
            assert(jstools.cookieApi.has('test'))
        })
    })

    describe('#keysCookie()', function () {
        it(`jstools.keysCookie('test', 'keysCookie') should return true`, function () {
            jstools.cookieApi.set('test', 'keysCookie')
            let arr = jstools.cookieApi.keys();
            assert(arr.constructor === Array)
        })
    })
})