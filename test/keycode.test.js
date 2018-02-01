describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`jstool.getKeyName(13) should return "Enter"`, function () {
            assert(jstool.getKeyName(13) === 'Enter')
        });
    });

});