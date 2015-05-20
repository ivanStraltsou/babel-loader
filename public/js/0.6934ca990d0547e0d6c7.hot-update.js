webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"mainDirectiveTemplate.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var mainDirective = (function () {
	    function mainDirective() {
	        _classCallCheck(this, mainDirective);
	
	        this.restrict = 'AE';
	        this.controllerAs = 'DirCtrl';
	        this.template = 'mainDirectiveTemplate.html';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBTyxDQUFDLHNKQUE0QixDQUFDLENBQUM7O0tBRWhDLGFBQWE7QUFDSixjQURULGFBQWEsR0FDRjsrQkFEWCxhQUFhOztBQUVYLGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGFBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQzlCLGFBQUksQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLENBQUM7TUFDaEQ7O2tCQUxDLGFBQWE7O2dCQU1MLG9CQUFDLE1BQU0sRUFBQztBQUNkLGlCQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoQixpQkFBSSxDQUFDLE1BQU0sR0FBRyxVQUFTLEdBQUcsRUFBQztBQUN2QixxQkFBRyxHQUFHLEtBQUssU0FBUyxFQUFFO0FBQ2xCLHlCQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7a0JBQ3pCO2NBQ0osQ0FBQztVQUNMOzs7Z0JBQ3NCLDRCQUFFO0FBQ3JCLDBCQUFhLENBQUMsUUFBUSxHQUFFLElBQUksYUFBYSxFQUFFLENBQUM7QUFDNUMsb0JBQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztVQUNqQzs7O1lBakJDLGFBQWE7OztzQkFvQkosYUFBYSIsImZpbGUiOiIwLjY5MzRjYTk5MGQwNTQ3ZTBkNmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdtYWluRGlyZWN0aXZlVGVtcGxhdGUuaHRtbCcpO1xyXG5cclxuY2xhc3MgbWFpbkRpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBRSc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnRGlyQ3RybCc7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICdtYWluRGlyZWN0aXZlVGVtcGxhdGUuaHRtbCc7XHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24odmFsKXtcclxuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0ID0gdmFsICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpe1xyXG4gICAgICAgIG1haW5EaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyBtYWluRGlyZWN0aXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW5EaXJlY3RpdmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5EaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9