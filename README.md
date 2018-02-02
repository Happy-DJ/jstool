# outils

[![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/dj-jstools)


前端业务代码工具库  

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装使用

1. 直接下载`min`目录下的[jstools.min.js](https://github.com/Hack-DJ/jstool/blob/master/min/jstools.min.js)使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器:
``` html
  <script src="jstools.min.js"></script>
  <script>
      var OS = jstools.getOS()
  </script>
```

### npm:
``` bash
$ npm install --save-dev dj-jstools
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const outils = require('dj-jstools')
const OS = outils.getOS()
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('dj-jstools/static/<方法名>')
const getOS = require('dj-jstools/static/getOS')
const OS = getOS()
```

**项目构建**
### 编译ES6转ES5 npm run jsBabel
### 重新编译脚本  npm run build
### 测试代码  npm run test







## API文档

### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 

### Class
#### &emsp;&emsp;[classApi][classApi]&emsp;&emsp;className的操作api
##### &emsp;&emsp;&emsp;&emsp;classApi.isElement(el) //是否元素节点
##### &emsp;&emsp;&emsp;&emsp;classApi.hasClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;classApi.addClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;classApi.removeClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;classApi.toggleClass(el,cls)

### animationFrame
#### &emsp;&emsp;[animationFrame][animationFrame]&emsp;&emsp;AnimationFrame简单兼容hack

### collections
#### &emsp;&emsp;[shuffle][shuffle]&emsp;&emsp;数组打乱随机乱序


### Cookie
#### &emsp;&emsp;[cookieApi][cookieApi]&emsp;&emsp;cookie存储(适用和服务端交互)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.set(name, value[, end[, path[, domain[, secure]]]])添加Cookie
##### &emsp;&emsp;&emsp;&emsp;cookieApi.get(name) 根据name读取Cookie
##### &emsp;&emsp;&emsp;&emsp;cookieApi.has(name) 根据name验证是否存在
##### &emsp;&emsp;&emsp;&emsp;cookieApi.remove(name)根据name删除Cookie
##### &emsp;&emsp;&emsp;&emsp;cookieApi.keys()   获取cookieKeys列表

### Device  
#### &emsp;&emsp;[getExplore][getExplore]&emsp;&emsp;获取浏览器类型和版本号  
#### &emsp;&emsp;[getOS][getOS]&emsp;&emsp;获取操作系统类型
#### &emsp;&emsp;[isWeixin][isWeixin]&emsp;&emsp;是否微信内置浏览器
#### &emsp;&emsp;[getType][getType]&emsp;&emsp;是否手机
#### &emsp;&emsp;[mobileType][mobileType]&emsp;&emsp;手机类型

### Dom  
#### &emsp;&emsp;[scrollApi][scrollApi]&emsp;&emsp;scroll滚动方法
#### &emsp;&emsp;[getScrollTop][getScrollTop]&emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp;[offset][offset]&emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp;[scrollTo][scrollTo]&emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp;[setScrollTop][setScrollTop]&emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp;[windowResize][windowResize]&emsp;&emsp;H5软键盘缩回、弹起回调

### prefixStyle
#### &emsp;&emsp;[prefixStyle][prefixStyle]&emsp;&emsp;prefixStyle css针对不同浏览器加前缀

### Function  
#### &emsp;&emsp;[debounce][debounce]&emsp;&emsp;函数防抖   
#### &emsp;&emsp;[throttle][throttle]&emsp;&emsp;函数节流   

### Keycode  
#### &emsp;&emsp;[getKeyName][getKeyName]&emsp;&emsp;根据keycode获得键名 

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空
#### &emsp;&emsp;[isEmpty][isEmpty]&emsp;&emsp;判断变量是否为空

### Random  
#### &emsp;&emsp;[randomColor][randomColor] &emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum][randomNum]&emsp;&emsp;生成指定范围随机数 

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址
#### &emsp;&emsp;[priceSubstr][priceSubstr]&emsp;&emsp;千，万位分割

### secretInfo
#### &emsp;&emsp;[secretInfo][secretInfo]&emsp;&emsp;隐私信息加密


### String  
#### &emsp;&emsp;[digitUppercase][digitUppercase]&emsp;&emsp;现金额转大写

### Stroge
#### &emsp;&emsp;[Stroge][localStorageApi]&emsp;&emsp;缓存
#### &emsp;&emsp;localStorageApi.set&emsp;&emsp;设置缓存，缓存过期时间
#### &emsp;&emsp;localStorageApi.get&emsp;&emsp;读取缓存
#### &emsp;&emsp;localStorageApi.remove&emsp;&emsp;删除指定缓存
#### &emsp;&emsp;localStorageApi.clearv&emsp;&emsp;清空所有缓存


### Support  
#### &emsp;&emsp;[isSupportWebP][isSupportWebP]&emsp;&emsp;判断浏览器是否支持webP格式图片
#### 

### Time  
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化${startTime}距现在的已过时间
#### &emsp;&emsp;[formatRemainTime][formatRemainTime]&emsp;&emsp;格式化现在距${endTime}的剩余时间
#### &emsp;&emsp;[formatUnixTime][formatUnixTime]&emsp;&emsp;格式化时间错位年月日
#### &emsp;&emsp;[formatTime][formatTime]&emsp;&emsp;格式化时间戳为年月日时分秒

### Url
#### &emsp;&emsp;[parseQueryString][parseQueryString]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQueryString][stringfyQueryString]&emsp;&emsp;对象序列化

### Type
#### &emsp;&emsp;[type][typeOf]&emsp;&emsp;判断类型


[arrayEqual]:https://github.com/Hack-DJ/outils/blob/master/src/array/arrayEqual.js

[classApi]:https://github.com/Hack-DJ/outils/blob/master/src/class/classApi.js

[cookieApi]:https://github.com/Hack-DJ/outils/blob/master/src/cookie/cookie.js

[shuffle]:https://github.com/Hack-DJ/outils/blob/master/src/collections/shuffle.js

[getExplore]:https://github.com/Hack-DJ/outils/blob/master/src/device/getExplore.js
[getOS]:https://github.com/Hack-DJ/outils/blob/master/src/device/getOS.js
[getType]:https://github.com/Hack-DJ/outils/blob/master/src/device/getType.js
[isWerixin]:https://github.com/Hack-DJ/outils/blob/master/src/device/isWerixin.js
[mobileType]:https://github.com/Hack-DJ/outils/blob/master/src/device/mobileType.js

[scrollApi]:https://github.com/Hack-DJ/outils/blob/master/src/dom/scrollApi.js
[getScrollTop]:https://github.com/Hack-DJ/outils/blob/master/src/dom/getScrollTop.js
[offset]:https://github.com/Hack-DJ/outils/blob/master/src/dom/offset.js
[scrollTo]:https://github.com/Hack-DJ/outils/blob/master/src/dom/scrollTo.js
[setScrollTop]:https://github.com/Hack-DJ/outils/blob/master/src/dom/setScrollTop.js
[windowResize]:https://github.com/Hack-DJ/outils/blob/master/src/dom/windowResize.js

[prefixStyle]:https://github.com/Hack-DJ/outils/blob/master/src/prefixStyle/prefixStyle.js

[debounce]:https://github.com/Hack-DJ/outils/blob/master/src/function/debounce.js
[throttle]:https://github.com/Hack-DJ/outils/blob/master/src/function/throttle.js

[getKeyName]:https://github.com/Hack-DJ/outils/blob/master/src/keycode/getKeyName.js

[deepClone]:https://github.com/Hack-DJ/outils/blob/master/src/object/deepClone.js
[isEmptyObject]:https://github.com/Hack-DJ/outils/blob/master/src/object/isEmptyObject.js
[isEmpty]:https://github.com/Hack-DJ/outils/blob/master/src/object/isEmpty.js

[randomColor]:https://github.com/Hack-DJ/outils/blob/master/src/random/randomColor.js
[randomNum]:https://github.com/Hack-DJ/outils/blob/master/src/random/randomNum.js

[isEmail]:https://github.com/Hack-DJ/outils/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/Hack-DJ/outils/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/Hack-DJ/outils/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/Hack-DJ/outils/blob/master/src/regexp/isUrl.js
[priceSubstr]:https://github.com/Hack-DJ/outils/blob/master/src/regexp/priceSubstr.js

[secretInfo]:https://github.com/Hack-DJ/outils/blob/master/src/secret/secretInfo.js

[digitUppercase]:https://github.com/Hack-DJ/outils/blob/master/src/string/digitUppercase.js

[isSupportWebP]:https://github.com/Hack-DJ/outils/blob/master/src/support/isSupportWebP.js

[localStorage]:https://github.com/Hack-DJ/outils/blob/master/src/stroge/localStorage.js

[isSupportWebP]:https://github.com/Hack-DJ/outils/blob/master/src/support/isSupportWebP.js

[formatPassTime]:https://github.com/Hack-DJ/outils/blob/master/src/time/formatPassTime.js
[formatRemainTime]:https://github.com/Hack-DJ/outils/blob/master/src/time/formatRemainTime.js
[formatTime]:https://github.com/Hack-DJ/outils/blob/master/src/time/formatTime.js
[formatUnixTime]:https://github.com/Hack-DJ/outils/blob/master/src/time/formatUnixTime.js

[typeOf]:https://github.com/Hack-DJ/outils/blob/master/src/type/typeOf.js

[parseQueryString]:https://github.com/Hack-DJ/outils/blob/master/src/url/parseQueryString.js
[stringfyQueryString]:https://github.com/Hack-DJ/outils/blob/master/src/url/stringfyQueryString.js
