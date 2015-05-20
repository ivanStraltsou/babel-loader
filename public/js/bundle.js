/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);
	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var template = __webpack_require__(10);
	
	var mainDirective = (function () {
	    function mainDirective() {
	        _classCallCheck(this, mainDirective);
	
	        this.restrict = 'AE';
	        this.controllerAs = 'DirCtrl';
	        this.template = template;
	    }
	
	    _createClass(mainDirective, [{
	        key: 'controller',
	        value: function controller($scope) {
	            this.number = 1;
	            this.update = function (val) {
	                if (val !== undefined) {
	                    this.output = val * 2;
	                }
	            };
	        }
	    }], [{
	        key: 'directiveFactory',
	        value: function directiveFactory() {
	            mainDirective.instance = new mainDirective();
	            return mainDirective.instance;
	        }
	    }]);
	
	    return mainDirective;
	})();
	
	exports['default'] = mainDirective;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	exports.push([module.id, "table {\n  margin: 20px;\n}\ntable thead {\n  background-color: #e3e3e3;\n}\ntable p {\n  width: 170px;\n  height: 15px;\n  margin: 0;\n}\nform {\n  width: 300px;\n  margin: 20px;\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MainController = (function () {
	    function MainController(MainService, $scope) {
	        _classCallCheck(this, MainController);
	
	        this.scope = $scope;
	        this.MainService = MainService;
	        this.init();
	        this.edit = false;
	        this.data = [];
	        this.record = {};
	    }
	
	    _createClass(MainController, [{
	        key: 'init',
	        value: function init() {
	            function callback(data) {
	                this.data = data;
	                this.scope.$apply();
	            }
	            this.MainService.getData().then(callback.bind(this));
	        }
	    }, {
	        key: 'addRecord',
	        value: function addRecord() {
	            this.data.push(this.record);
	            this.record = {};
	        }
	    }, {
	        key: 'setSelected',
	        value: function setSelected(ind) {
	            this.selected = ind;
	        }
	    }, {
	        key: 'ifSelected',
	        value: function ifSelected(index) {
	            return this.selected == index;
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            this.selected = null;
	        }
	    }]);
	
	    return MainController;
	})();
	
	MainController.$inject = ['MainService', '$scope'];
	
	exports['default'] = MainController;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MainService = (function () {
	    function MainService($q, $timeout) {
	        _classCallCheck(this, MainService);
	
	        this.timeout = $timeout;
	        this.q = $q;
	    }
	
	    _createClass(MainService, [{
	        key: 'getData',
	        value: function getData() {
	            var data = [{
	                name: 'John',
	                age: 65,
	                city: 'Moscow'
	            }, {
	                name: 'Alex',
	                age: 70,
	                city: 'Minsk'
	            }];
	            var self = this;
	            return new Promise(function (resolve, reject) {
	                self.timeout(function () {
	                    resolve(data);
	                }, 10);
	            });
	            //var d = this.q.defer();
	            //this.timeout(() =>{
	            //    d.resolve(data)
	            //}, 1000);
	            //return d.promise;
	        }
	    }]);
	
	    return MainService;
	})();
	
	MainService.$inject = ['$q', '$timeout'];
	exports['default'] = MainService;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _controllersMainController = __webpack_require__(4);
	
	var _controllersMainController2 = _interopRequireDefault(_controllersMainController);
	
	var _servicesMainService = __webpack_require__(5);
	
	var _servicesMainService2 = _interopRequireDefault(_servicesMainService);
	
	var _directivesMainDirective = __webpack_require__(1);
	
	var _directivesMainDirective2 = _interopRequireDefault(_directivesMainDirective);
	
	var _directivesRowDirective = __webpack_require__(7);
	
	var _directivesRowDirective2 = _interopRequireDefault(_directivesRowDirective);
	
	angular.module('app', []).controller('MainController', _controllersMainController2['default']).service('MainService', _servicesMainService2['default']).directive('mainDirective', _directivesMainDirective2['default'].directiveFactory).directive('rowDirective', _directivesRowDirective2['default'].directiveFactory);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var template = __webpack_require__(11);
	
	var rowDirective = (function () {
	    function rowDirective() {
	        _classCallCheck(this, rowDirective);
	
	        this.restrict = 'AE';
	        this.controllerAs = 'RowCtrl';
	        this.replace = true;
	        this.template = template;
	        this.scope = {
	            model: '=',
	            ind: '='
	        };
	    }
	
	    _createClass(rowDirective, [{
	        key: 'controller',
	        value: function controller($scope) {
	            this.setSelected = function (ind) {
	                this.selected = ind;
	            };
	            this.ifSelected = function (index) {
	                if (index === undefined) return false;
	                return this.selected == index;
	            };
	            this.save = function () {
	                this.selected = null;
	            };
	        }
	    }], [{
	        key: 'directiveFactory',
	        value: function directiveFactory() {
	            rowDirective.instance = new rowDirective();
	            return rowDirective.instance;
	        }
	    }]);
	
	    return rowDirective;
	})();
	
	exports['default'] = rowDirective;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var v1="<input type=\"number\" ng-model=\"DirCtrl.number\" ng-change=\"DirCtrl.update(DirCtrl.number)\"> <p class=\"red\">{{DirCtrl.output}}</p>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("mainDirective.html", v1)}]);
	module.exports=v1;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var v1="<td ng-click=\"RowCtrl.setSelected(ind)\"> <p ng-hide=\"RowCtrl.ifSelected(ind)\">{{model}}</p> <input ng-show=\"RowCtrl.ifSelected(ind)\" ng-model=\"model\" ng-blur=\"RowCtrl.save()\"> </td>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("rowDirective.html", v1)}]);
	module.exports=v1;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmU2NGQzNTBlYThlZWIxYTg5NjAiLCJ3ZWJwYWNrOi8vLy4uL2JhYmVsLWxvYWRlci1wcm90b3R5cGUvYXBwL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2JhYmVsLWxvYWRlci1wcm90b3R5cGUvYXBwL3NjcmlwdHMvZGlyZWN0aXZlcy9tYWluRGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvc3R5bGUubGVzcz84NDQ2Iiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvc3R5bGUubGVzcyIsIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9NYWluQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9NYWluU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uL2JhYmVsLWxvYWRlci1wcm90b3R5cGUvYXBwL3NjcmlwdHMvZGlyZWN0aXZlcy9yb3dEaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlbXBsYXRlcy9tYWluRGlyZWN0aXZlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlbXBsYXRlcy9yb3dEaXJlY3RpdmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQSw2SEFBNEgsZ0JBQWdCO0FBQzVJLGlFQUFnRSxnQ0FBZ0M7QUFDaEcsbUI7Ozs7OztBQ0ZBLDZGQUE0RixPQUFPO0FBQ25HLGlFQUFnRSwrQkFBK0I7QUFDL0YsbUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3B1YmxpYy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZlNjRkMzUwZWE4ZWViMWE4OTYwXG4gKiovIiwicmVxdWlyZSgnLi9hcHAuanMnKTtcclxucmVxdWlyZSgnLi4vc3R5bGVzL3N0eWxlLmxlc3MnKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9pbmRleC5qc1xuICoqLyIsInZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vLi4vLi4vdGVtcGxhdGVzL21haW5EaXJlY3RpdmUuaHRtbCcpO1xyXG5jbGFzcyBtYWluRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0FFJztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICdEaXJDdHJsJztcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24odmFsKXtcclxuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0ID0gdmFsICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpe1xyXG4gICAgICAgIG1haW5EaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyBtYWluRGlyZWN0aXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW5EaXJlY3RpdmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5EaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmxlc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmxlc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvc3R5bGVzL3N0eWxlLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInRhYmxlIHtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxudGFibGUgdGhlYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcXG59XFxudGFibGUgcCB7XFxuICB3aWR0aDogMTcwcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcbmZvcm0ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L2xlc3MtbG9hZGVyIS4vYXBwL3N0eWxlcy9zdHlsZS5sZXNzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiY2xhc3MgTWFpbkNvbnRyb2xsZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihNYWluU2VydmljZSwgJHNjb3BlKXtcclxuICAgICAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMuTWFpblNlcnZpY2UgPSBNYWluU2VydmljZTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnJlY29yZCA9IHt9O1xyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGRhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLk1haW5TZXJ2aWNlLmdldERhdGEoKS50aGVuKGNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgYWRkUmVjb3JkKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2godGhpcy5yZWNvcmQpO1xyXG4gICAgICAgIHRoaXMucmVjb3JkID0ge307XHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3RlZChpbmQpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpbmQ7XHJcbiAgICB9XHJcbiAgICBpZlNlbGVjdGVkKGluZGV4KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA9PSBpbmRleDtcclxuICAgIH1cclxuICAgIHNhdmUoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnTWFpblNlcnZpY2UnLCAnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9iYWJlbC1sb2FkZXItcHJvdG90eXBlL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzXG4gKiovIiwiY2xhc3MgTWFpblNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3RvcigkcSwgJHRpbWVvdXQpe1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMucSA9ICRxO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSm9obicsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDY1LFxyXG4gICAgICAgICAgICAgICAgY2l0eTogJ01vc2NvdydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0FsZXgnLFxyXG4gICAgICAgICAgICAgICAgYWdlOiA3MCxcclxuICAgICAgICAgICAgICAgIGNpdHk6ICdNaW5zaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgICAgIH0sIDEwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vdmFyIGQgPSB0aGlzLnEuZGVmZXIoKTtcclxuICAgICAgICAvL3RoaXMudGltZW91dCgoKSA9PntcclxuICAgICAgICAvLyAgICBkLnJlc29sdmUoZGF0YSlcclxuICAgICAgICAvL30sIDEwMDApO1xyXG4gICAgICAgIC8vcmV0dXJuIGQucHJvbWlzZTtcclxuICAgIH1cclxufVxyXG5cclxuTWFpblNlcnZpY2UuJGluamVjdCA9IFsnJHEnLCckdGltZW91dCddO1xyXG5leHBvcnQgZGVmYXVsdCBNYWluU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9iYWJlbC1sb2FkZXItcHJvdG90eXBlL2FwcC9zY3JpcHRzL3NlcnZpY2VzL01haW5TZXJ2aWNlLmpzXG4gKiovIiwiaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXInXHJcbmltcG9ydCBNYWluU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL01haW5TZXJ2aWNlJ1xyXG5pbXBvcnQgbWFpbkRpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFpbkRpcmVjdGl2ZSdcclxuaW1wb3J0IHJvd0RpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZXMvcm93RGlyZWN0aXZlJ1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKVxyXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpXHJcbiAgICAuc2VydmljZSgnTWFpblNlcnZpY2UnLCBNYWluU2VydmljZSlcclxuICAgIC5kaXJlY3RpdmUoJ21haW5EaXJlY3RpdmUnLCBtYWluRGlyZWN0aXZlLmRpcmVjdGl2ZUZhY3RvcnkpXHJcbiAgICAuZGlyZWN0aXZlKCdyb3dEaXJlY3RpdmUnLCByb3dEaXJlY3RpdmUuZGlyZWN0aXZlRmFjdG9yeSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9iYWJlbC1sb2FkZXItcHJvdG90eXBlL2FwcC9zY3JpcHRzL2FwcC5qc1xuICoqLyIsInZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vLi4vLi4vdGVtcGxhdGVzL3Jvd0RpcmVjdGl2ZS5odG1sJyk7XHJcbmNsYXNzIHJvd0RpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBRSc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnUm93Q3RybCc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgbW9kZWwgOiAnPScsXHJcbiAgICAgICAgICAgICBpbmQgOiAnPSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCA9IGZ1bmN0aW9uKGluZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpbmQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlmU2VsZWN0ZWQgPSBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkID09IGluZGV4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zYXZlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoKXtcclxuICAgICAgICByb3dEaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyByb3dEaXJlY3RpdmUoKTtcclxuICAgICAgICByZXR1cm4gcm93RGlyZWN0aXZlLmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3dEaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL3Jvd0RpcmVjdGl2ZS5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQoKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdjE9XCI8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuZy1tb2RlbD1cXFwiRGlyQ3RybC5udW1iZXJcXFwiIG5nLWNoYW5nZT1cXFwiRGlyQ3RybC51cGRhdGUoRGlyQ3RybC5udW1iZXIpXFxcIj4gPHAgY2xhc3M9XFxcInJlZFxcXCI+e3tEaXJDdHJsLm91dHB1dH19PC9wPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcIm1haW5EaXJlY3RpdmUuaHRtbFwiLCB2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL3RlbXBsYXRlcy9tYWluRGlyZWN0aXZlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHYxPVwiPHRkIG5nLWNsaWNrPVxcXCJSb3dDdHJsLnNldFNlbGVjdGVkKGluZClcXFwiPiA8cCBuZy1oaWRlPVxcXCJSb3dDdHJsLmlmU2VsZWN0ZWQoaW5kKVxcXCI+e3ttb2RlbH19PC9wPiA8aW5wdXQgbmctc2hvdz1cXFwiUm93Q3RybC5pZlNlbGVjdGVkKGluZClcXFwiIG5nLW1vZGVsPVxcXCJtb2RlbFxcXCIgbmctYmx1cj1cXFwiUm93Q3RybC5zYXZlKClcXFwiPiA8L3RkPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcInJvd0RpcmVjdGl2ZS5odG1sXCIsIHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvdGVtcGxhdGVzL3Jvd0RpcmVjdGl2ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=