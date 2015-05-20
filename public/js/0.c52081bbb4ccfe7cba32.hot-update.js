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
	        this.template = '<input type="number" ng-model="DirCtrl.number" ng-change="DirCtrl.update(DirCtrl.number)"><p>{{DirCtrl.output}}</p>';
	    }
	
	    _createClass(mainDirective, [{
	        key: 'controller',
	        value: function controller($scope) {
	            this.number = 1;
	            var self = this;
	            $scope.$watch(self.number, function (value) {
	                if (value !== undefined) {
	                    self.output = value * 2;
	                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLHFIQUFxSDtNQUN4STs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsaUJBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGlCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsbUJBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxVQUFDLEtBQUssRUFBSztBQUNqQyxxQkFBRyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQ3BCLHlCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7a0JBQzNCO2NBQ0osQ0FBQztVQUNMOzs7Z0JBQ3NCLDRCQUFFO0FBQ3JCLDBCQUFhLENBQUMsUUFBUSxHQUFFLElBQUksYUFBYSxFQUFFLENBQUM7QUFDNUMsb0JBQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztVQUNqQzs7O1lBbEJDLGFBQWE7OztzQkFxQkosYUFBYSIsImZpbGUiOiIwLmM1MjA4MWJiYjRjY2ZlN2NiYTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBtYWluRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0FFJztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICdEaXJDdHJsJztcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJzxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmctbW9kZWw9XCJEaXJDdHJsLm51bWJlclwiIG5nLWNoYW5nZT1cIkRpckN0cmwudXBkYXRlKERpckN0cmwubnVtYmVyKVwiPjxwPnt7RGlyQ3RybC5vdXRwdXR9fTwvcD4nXHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSAxO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkc2NvcGUuJHdhdGNoKHNlbGYubnVtYmVyLCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm91dHB1dCA9IHZhbHVlICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpe1xyXG4gICAgICAgIG1haW5EaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyBtYWluRGlyZWN0aXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW5EaXJlY3RpdmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5EaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9