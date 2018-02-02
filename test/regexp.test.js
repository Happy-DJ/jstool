describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('jstools.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(jstools.isEmail("leiquanlive.com"))
        });
        it('jstools.isEmail("leiquan@live.com") should return true ', function () {
            assert(jstools.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('jstools.isIdCard("622224188203234033") should return true ', function () {
            assert(jstools.isIdCard("622224188203234033"))
        });
        it('jstools.isIdCard("zas224188203234033") should return false', function () {
            assert(!jstools.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('jstools.isPhoneNum("18882324234") should return true ', function () {
            assert(jstools.isPhoneNum("18882324234"))
        });
        it('jstools.isPhoneNum("8618882324234") should return true ', function () {
            assert(jstools.isPhoneNum("8618882324234"))
        });
        it('jstools.isPhoneNum("5534553") should return false', function () {
            assert(!jstools.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('jstools.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(jstools.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('jstools.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(jstools.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('jstools.isUrl("www.baidu.com") should return true', function () {
            assert(jstools.isUrl("www.baidu.com"))
        });
        it('jstools.isUrl("baidu.com") should return true', function () {
            assert(jstools.isUrl("baidu.com"))
        });
        it('jstools.isUrl("http://baiducom") should return false', function () {
            assert(!jstools.isUrl("http://baiducom"))
        });
    });

});