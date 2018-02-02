describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`jstools.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${jstools.getExplore()}`)
            assert(/^Chrome:/.test(jstools.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`jstools.getOS() should return "windows"`, function () {
            console.log(`OS:${jstools.getOS()}`)
            assert(jstools.getOS() === 'windows' || jstools.getOS() === 'MacOSX' || jstools.getOS() === 'linux')
        });
    });
});