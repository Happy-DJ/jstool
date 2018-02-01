describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(jstool.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(jstool.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= jstool.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = jstool.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})