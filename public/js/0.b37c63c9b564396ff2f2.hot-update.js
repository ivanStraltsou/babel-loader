webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var mainDirective = (function () {
	    function mainDirective() {
	        _classCallCheck(this, mainDirective);
	
	        this.restrict = 'AE';
	        this.controllerAs = 'DirCtrl';
	        this.template = '<input type="text" ng-model="DirCtrl.number"><p>{{DirCtrl.output}}</p>';
	    }
	
	    _createClass(mainDirective, [{
	        key: 'controller',
	        value: function controller($scope) {
	            $scope.$watch(DirCtrl.number, function (value) {
	                DirCtrl.output = DirCtrl.number * 2;
	            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLHdFQUF3RTtNQUMzRjs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsbUJBQU0sQ0FBQyxNQUFNLENBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBSztBQUN0Qyx3QkFBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztjQUN2QyxDQUFDO1VBQ0w7OztnQkFDc0IsNEJBQUU7QUFDckIsMEJBQWEsQ0FBQyxRQUFRLEdBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUM1QyxvQkFBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1VBQ2pDOzs7WUFkQyxhQUFhOzs7c0JBaUJKLGFBQWEiLCJmaWxlIjoiMC5iMzdjNjNjOWI1NjQzOTZmZjJmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgbWFpbkRpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBRSc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnRGlyQ3RybCc7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cIkRpckN0cmwubnVtYmVyXCI+PHA+e3tEaXJDdHJsLm91dHB1dH19PC9wPidcclxuICAgIH1cclxuICAgIGNvbnRyb2xsZXIoJHNjb3BlKXtcclxuICAgICAgICAkc2NvcGUuJHdhdGNoKChEaXJDdHJsLm51bWJlciksKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIERpckN0cmwub3V0cHV0ID0gRGlyQ3RybC5udW1iZXIgKiAyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpe1xyXG4gICAgICAgIG1haW5EaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyBtYWluRGlyZWN0aXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW5EaXJlY3RpdmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5EaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9