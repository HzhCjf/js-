(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    console.log("aaaa");
    module.exports = {
      name: "aaaa"
    };
    },{}],2:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    console.log("bbbbb");
    let name = "我是b模块";
    var _default = name;
    exports.default = _default;
    },{}],3:[function(require,module,exports){
    "use strict";
    
    var _b = _interopRequireDefault(require("./b.js"));
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    let obj = require("./a.js");
    console.log(obj);
    console.log(_b.default);
    },{"./a.js":1,"./b.js":2}]},{},[3]);
    