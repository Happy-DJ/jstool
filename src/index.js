/**
 * @desc webpack打包入口文件
 */
const animationFrame = require('./animationFrame/animationFrame')

const arrayEqual = require('./array/arrayEqual')

const classApi = require('./class/classApi')
const cookieApi = require('./cookie/cookie')

const shuffle =  require('./collections/shuffle')



const getOS = require('./device/getOS')
const isWeixin = require('./device/isWeixin')
const getType = require('./device/getType')
const getExplore = require('./device/getExplore')
const mobileType = require('./device/mobileType')


const scrollApi = require('./dom/scrollApi')
const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')
const windowResize = require('./dom/windowResize')

const debounce = require('./function/debounce')
const throttle = require('./function/throttle')

const getKeyName = require('./keycode/getKeyName')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')
const isEmpty = require('./object/isEmpty')


const prefixStyle = require('./prefixStyle/prefixStyle')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')
const priceSubstr = require('./regexp/priceSubstr')

const secretInfo = require('./secret/secretInfo')

const digitUppercase = require('./string/digitUppercase')

const localStorageApi = require('./stroge/localStorage')

const isSupportWebP = require('./support/isSupportWebP')

const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')
const formatTime = require('./time/formatTime')
const formatUnixTime = require('./time/formatUnixTime')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')

const typeOf = require('./type/typeOf')


module.exports = {
    animationFrame,

    arrayEqual,

    classApi,

    cookieApi,

    shuffle,

    isWeixin,
    getOS,
    getExplore,
    getType,
    mobileType,


    scrollApi,
    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,
    windowResize,
    prefixStyle,

    debounce,
    throttle,

    getKeyName,

    deepClone,
    isEmptyObject,
    isEmpty,

    randomColor,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
    priceSubstr,

    secretInfo,

    digitUppercase,

    isSupportWebP,

    formatPassTime,
    formatRemainTime,
    formatTime,
    formatUnixTime,

    localStorageApi,

    parseQueryString,
    stringfyQueryString,

    typeOf,
}