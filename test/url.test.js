describe('Url API:', function () {
    describe('#parseQueryString()', function () {
        it(`jstools.parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function () {
            let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
            assert.deepEqual(jstools.parseQueryString(url), {
                wd: '百度',
                rsv_spt: '10'
            })
        });
    });

    describe('#stringfyQueryString()', function () {
        it(`jstools.stringfyQueryString({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function () {
            let param = {
                wd: '百度',
                rsv_spt: '10'
            }
            assert(jstools.stringfyQueryString(param) === 'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
        });
    });
})