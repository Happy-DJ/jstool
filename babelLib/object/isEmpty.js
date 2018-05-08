"use strict";

/**
 * Created by Deng on 2018/2/1.
 */
var typeOf = require('../type/typeOf');
/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
var isEmpty = function isEmpty(obj) {

  if (obj == null) return true;

  if (typeOf(obj) == "Array" || typeOf(obj) == "String") return obj.length === 0;

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
};

module.exports = isEmpty;