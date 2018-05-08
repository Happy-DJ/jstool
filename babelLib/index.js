'use strict';

/**
 * @desc webpack打包入口文件
 */
var animationFrame = require('./animationFrame/animationFrame');

var arrayEqual = require('./array/arrayEqual');

var classApi = require('./class/classApi');
var cookieApi = require('./cookie/cookie');

var shuffle = require('./collections/shuffle');

var getOS = require('./device/getOS');
var isWeixin = require('./device/isWeixin');
var getType = require('./device/getType');
var getExplore = require('./device/getExplore');
var mobileType = require('./device/mobileType');

var scrollApi = require('./dom/scrollApi');
var getScrollTop = require('./dom/getScrollTop');
var offset = require('./dom/offset');
var scrollTo = require('./dom/scrollTo');
var setScrollTop = require('./dom/setScrollTop');
var windowResize = require('./dom/windowResize');

var debounce = require('./function/debounce');
var throttle = require('./function/throttle');

var getKeyName = require('./keycode/getKeyName');

var deepClone = require('./object/deepClone');
var isEmptyObject = require('./object/isEmptyObject');
var isEmpty = require('./object/isEmpty');

var prefixStyle = require('./prefixStyle/prefixStyle');

var randomColor = require('./random/randomColor');
var randomNum = require('./random/randomNum');

var isEmail = require('./regexp/isEmail');
var isIdCard = require('./regexp/isIdCard');
var isPhoneNum = require('./regexp/isPhoneNum');
var isUrl = require('./regexp/isUrl');
var priceSubstr = require('./regexp/priceSubstr');

var secretInfo = require('./secret/secretInfo');

var digitUppercase = require('./string/digitUppercase');

var localStorageApi = require('./stroge/localStorage');

var isSupportWebP = require('./support/isSupportWebP');

var formatPassTime = require('./time/formatPassTime');
var formatRemainTime = require('./time/formatRemainTime');
var formatTime = require('./time/formatTime');
var formatUnixTime = require('./time/formatUnixTime');

var parseQueryString = require('./url/parseQueryString');
var stringfyQueryString = require('./url/stringfyQueryString');

var typeOf = require('./type/typeOf');

module.exports = {
    animationFrame: animationFrame,

    arrayEqual: arrayEqual,

    classApi: classApi,

    cookieApi: cookieApi,

    shuffle: shuffle,

    isWeixin: isWeixin,
    getOS: getOS,
    getExplore: getExplore,
    getType: getType,
    mobileType: mobileType,

    scrollApi: scrollApi,
    getScrollTop: getScrollTop,
    offset: offset,
    scrollTo: scrollTo,
    setScrollTop: setScrollTop,
    windowResize: windowResize,

    prefixStyle: prefixStyle,

    debounce: debounce,
    throttle: throttle,

    getKeyName: getKeyName,

    deepClone: deepClone,
    isEmptyObject: isEmptyObject,
    isEmpty: isEmpty,

    randomColor: randomColor,
    randomNum: randomNum,

    isEmail: isEmail,
    isIdCard: isIdCard,
    isPhoneNum: isPhoneNum,
    isUrl: isUrl,
    priceSubstr: priceSubstr,

    secretInfo: secretInfo,

    digitUppercase: digitUppercase,

    isSupportWebP: isSupportWebP,

    formatPassTime: formatPassTime,
    formatRemainTime: formatRemainTime,
    formatTime: formatTime,
    formatUnixTime: formatUnixTime,

    localStorageApi: localStorageApi,

    parseQueryString: parseQueryString,
    stringfyQueryString: stringfyQueryString,

    typeOf: typeOf
};