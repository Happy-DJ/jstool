describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual jstools.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, jstools.deepClone(person))
        });

        it(`person === jstools.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, jstools.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`jstools.isEmptyObject({}) should return true`, function () {
            assert(jstools.deepClone({}))
        });

        it(`jstools.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(jstools.isEmptyObject({
                one: 1
            }))
        });

        it(`jstools.isEmptyObject([]) should return false`, function () {
            assert.notEqual(jstools.isEmptyObject([]))
        });
    });

    describe('#isEmpty()', function () {
        it(`jstools.isEmpty({}) should return true`, function () {
            assert(jstools.deepClone({}))
        });

        it(`jstools.isEmpty({ one: 1 }) should return false`, function () {
            assert.notEqual(jstools.isEmpty({
                one: 1
            }))
        });

        it(`jstools.isEmpty([]) should return true`, function () {
            assert.notEqual(jstools.isEmpty([]))
        });
        it(`jstools.isEmpty([1]) should return false`, function () {
            assert.notEqual(jstools.isEmpty([1]))
        });
        it(`jstools.isEmpty('') should return true`, function () {
            assert.notEqual(jstools.isEmpty(''))
        });
        it(`jstools.isEmpty(null) should return true`, function () {
            assert.notEqual(jstools.isEmpty(null))
        });
        it(`jstools.isEmpty(let test) should return true`, function () {
            let test;
            assert.notEqual(jstools.isEmpty(test))
        });
    });
})