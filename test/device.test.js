describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`jstool.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${jstool.getExplore()}`)
            assert(/^Chrome:/.test(jstool.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`jstool.getOS() should return "windows"`, function () {
            console.log(`OS:${jstool.getOS()}`)
            assert(jstool.getOS() === 'windows' || jstool.getOS() === 'MacOSX' || jstool.getOS() === 'linux')
        });
    });
});