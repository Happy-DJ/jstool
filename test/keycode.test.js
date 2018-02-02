describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`jstools.getKeyName(13) should return "Enter"`, function () {
            assert(jstools.getKeyName(13) === 'Enter')
        });
    });

});