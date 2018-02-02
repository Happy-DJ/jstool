describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`jstools.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(jstools.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('jstools.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(jstools.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`jstools.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(jstools.arrayEqual(arr, arr))
        });
    });
});