describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(jstools.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(jstools.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= jstools.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = jstools.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})