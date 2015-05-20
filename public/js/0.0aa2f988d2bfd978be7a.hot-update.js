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
	            var _this = this;
	
	            $scope.$watch(this.number, function (value) {
	                _this.output = _this.number * 2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLHdFQUF3RTtNQUMzRjs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDOzs7QUFDZCxtQkFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ25DLHVCQUFLLE1BQU0sR0FBRyxNQUFLLE1BQU0sR0FBRyxDQUFDLENBQUM7Y0FDakMsQ0FBQztVQUNMOzs7Z0JBQ3NCLDRCQUFFO0FBQ3JCLDBCQUFhLENBQUMsUUFBUSxHQUFFLElBQUksYUFBYSxFQUFFLENBQUM7QUFDNUMsb0JBQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztVQUNqQzs7O1lBZEMsYUFBYTs7O3NCQWlCSixhQUFhIiwiZmlsZSI6IjAuMGFhMmY5ODhkMmJmZDk3OGJlN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIG1haW5EaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQUUnO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ0RpckN0cmwnO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJEaXJDdHJsLm51bWJlclwiPjxwPnt7RGlyQ3RybC5vdXRwdXR9fTwvcD4nXHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgodGhpcy5udW1iZXIpLCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubnVtYmVyICogMjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoKXtcclxuICAgICAgICBtYWluRGlyZWN0aXZlLmluc3RhbmNlID1uZXcgbWFpbkRpcmVjdGl2ZSgpO1xyXG4gICAgICAgIHJldHVybiBtYWluRGlyZWN0aXZlLmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluRGlyZWN0aXZlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2JhYmVsLWxvYWRlci1wcm90b3R5cGUvYXBwL3NjcmlwdHMvZGlyZWN0aXZlcy9tYWluRGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==