describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            jstool.cookieApi.set('test', 'getTestValue')
        })
        it(`jstool.getCookie('test', 'getTestValue') should return true`, function () {
            assert(jstool.cookieApi.get('test') === 'getTestValue')
        })
        after(function () {
            jstool.cookieApi.remove('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            jstool.cookieApi.set('test', 'removeTestValue')
        })
        it(`jstool.removeCookie('test') should return false`, function () {
            jstool.cookieApi.remove('test')
            assert.notEqual(jstool.cookieApi.get('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`jstool.getCookie('test', 'setCookie') should return true`, function () {
            jstool.cookieApi.set('test', 'setCookie')
            assert(jstool.cookieApi.get('test') === 'setCookie')
        })
        after(function () {
            jstool.cookieApi.remove('test')
        })
    })

    describe('#hasCookie()', function () {
        it(`jstool.hasCookie('test', 'hasCookie') should return true`, function () {
            jstool.cookieApi.set('test', 'hasCookie')
            assert(jstool.cookieApi.has('test'))
        })
    })

    describe('#keysCookie()', function () {
        it(`jstool.keysCookie('test', 'keysCookie') should return true`, function () {
            jstool.cookieApi.set('test', 'keysCookie')
            let arr = jstool.cookieApi.keys();
            assert(arr.constructor === Array)
        })
    })
})