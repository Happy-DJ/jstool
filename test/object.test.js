describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual jstool.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, jstool.deepClone(person))
        });

        it(`person === jstool.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, jstool.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`jstool.isEmptyObject({}) should return true`, function () {
            assert(jstool.deepClone({}))
        });

        it(`jstool.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(jstool.isEmptyObject({
                one: 1
            }))
        });

        it(`jstool.isEmptyObject([]) should return false`, function () {
            assert.notEqual(jstool.isEmptyObject([]))
        });
    });

    describe('#isEmpty()', function () {
        it(`jstool.isEmpty({}) should return true`, function () {
            assert(jstool.deepClone({}))
        });

        it(`jstool.isEmpty({ one: 1 }) should return false`, function () {
            assert.notEqual(jstool.isEmpty({
                one: 1
            }))
        });

        it(`jstool.isEmpty([]) should return true`, function () {
            assert.notEqual(jstool.isEmpty([]))
        });
        it(`jstool.isEmpty([1]) should return false`, function () {
            assert.notEqual(jstool.isEmpty([1]))
        });
        it(`jstool.isEmpty('') should return true`, function () {
            assert.notEqual(jstool.isEmpty(''))
        });
        it(`jstool.isEmpty(null) should return true`, function () {
            assert.notEqual(jstool.isEmpty(null))
        });
        it(`jstool.isEmpty(let test) should return true`, function () {
            let test;
            assert.notEqual(jstool.isEmpty(test))
        });
    });
})