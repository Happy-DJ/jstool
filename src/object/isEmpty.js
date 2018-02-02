/**
 * Created by Deng on 2018/2/1.
 */
const typeOf = require('../type/typeOf')
/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
const isEmpty = function (obj) {

    if (obj == null)return true;

    if (typeOf(obj) == "Array" || typeOf(obj) == "String") return obj.length === 0;

    for (let key in obj)  if (obj.hasOwnProperty(key)) return false;
}

module.exports = isEmpty