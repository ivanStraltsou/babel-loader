webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var tmp = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./mainDirectiveTemplate.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var mainDirective = (function () {
	    function mainDirective() {
	        _classCallCheck(this, mainDirective);
	
	        this.restrict = 'AE';
	        this.controllerAs = 'DirCtrl';
	        this.template = tmp;
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

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxLQUFJLEdBQUcsR0FBSSxtQkFBTyxDQUFDLHdKQUE4QixDQUFDLENBQUM7O0tBRTdDLGFBQWE7QUFDSixjQURULGFBQWEsR0FDRjsrQkFEWCxhQUFhOztBQUVYLGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGFBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQzlCLGFBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRztNQUN0Qjs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsaUJBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGlCQUFJLENBQUMsTUFBTSxHQUFHLFVBQVMsR0FBRyxFQUFDO0FBQ3ZCLHFCQUFHLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDbEIseUJBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztrQkFDekI7Y0FDSixDQUFDO1VBQ0w7OztnQkFDc0IsNEJBQUU7QUFDckIsMEJBQWEsQ0FBQyxRQUFRLEdBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUM1QyxvQkFBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1VBQ2pDOzs7WUFqQkMsYUFBYTs7O3NCQW9CSixhQUFhIiwiZmlsZSI6IjAuY2NlNTQ1MDRkNTZlYzE0OGIzMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0bXAgPSAgcmVxdWlyZSgnLi9tYWluRGlyZWN0aXZlVGVtcGxhdGUuaHRtbCcpO1xyXG5cclxuY2xhc3MgbWFpbkRpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBRSc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnRGlyQ3RybCc7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRtcFxyXG4gICAgfVxyXG4gICAgY29udHJvbGxlcigkc2NvcGUpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKHZhbCl7XHJcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dCA9IHZhbCAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoKXtcclxuICAgICAgICBtYWluRGlyZWN0aXZlLmluc3RhbmNlID1uZXcgbWFpbkRpcmVjdGl2ZSgpO1xyXG4gICAgICAgIHJldHVybiBtYWluRGlyZWN0aXZlLmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluRGlyZWN0aXZlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2JhYmVsLWxvYWRlci1wcm90b3R5cGUvYXBwL3NjcmlwdHMvZGlyZWN0aXZlcy9tYWluRGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==