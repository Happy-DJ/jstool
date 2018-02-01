describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`dj-jstool.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(jstool.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('jstool.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(jstool.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`jstool.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(jstool.arrayEqual(arr, arr))
        });
    });
});