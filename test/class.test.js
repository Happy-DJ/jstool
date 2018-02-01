describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`jstool.addClass($ele, 'test') should return true`, function () {
            jstool.classApi.addClass($ele, 'test')
            assert(jstool.classApi.hasClass($ele, 'test'))
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
            jstool.classApi.addClass($ele, 'test')
        })
        it(`jstool.hasClass($ele, 'test') should return true`, function () {
            assert(jstool.classApi.hasClass($ele, 'test'))
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
            jstool.classApi.addClass($ele, 'test')
        })
        it(`jstool.removeClass($ele, 'test') should return false`, function () {
            jstool.classApi.removeClass($ele, 'test')
            assert.notEqual(jstool.classApi.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});