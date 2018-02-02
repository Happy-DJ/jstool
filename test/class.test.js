describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`jstools.addClass($ele, 'test') should return true`, function () {
            jstools.classApi.addClass($ele, 'test')
            assert(jstools.classApi.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            jstools.classApi.addClass($ele, 'test')
        })
        it(`jstools.hasClass($ele, 'test') should return true`, function () {
            assert(jstools.classApi.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            jstools.classApi.addClass($ele, 'test')
        })
        it(`jstools.removeClass($ele, 'test') should return false`, function () {
            jstools.classApi.removeClass($ele, 'test')
            assert.notEqual(jstools.classApi.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});