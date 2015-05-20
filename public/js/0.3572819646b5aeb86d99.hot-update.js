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
	        this.template = '<input type="number" ng-model="DirCtrl.number"><p>{{DirCtrl.output}}</p>';
	    }
	
	    _createClass(mainDirective, [{
	        key: 'controller',
	        value: function controller($scope) {
	            var _this = this;
	
	            this.number = 1;
	            $scope.$watch(this.number, function (value) {
	                if (value !== undefined) {
	                    _this.output = value * 2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLDBFQUEwRTtNQUM3Rjs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDOzs7QUFDZCxpQkFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEIsbUJBQU0sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBSztBQUNuQyxxQkFBRyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQ3BCLDJCQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUMzQjtjQUNKLENBQUM7VUFDTDs7O2dCQUNzQiw0QkFBRTtBQUNyQiwwQkFBYSxDQUFDLFFBQVEsR0FBRSxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQzVDLG9CQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7VUFDakM7OztZQWpCQyxhQUFhOzs7c0JBb0JKLGFBQWEiLCJmaWxlIjoiMC4zNTcyODE5NjQ2YjVhZWI4NmQ5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgbWFpbkRpcmVjdGl2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBRSc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnRGlyQ3RybCc7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICc8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5nLW1vZGVsPVwiRGlyQ3RybC5udW1iZXJcIj48cD57e0RpckN0cmwub3V0cHV0fX08L3A+J1xyXG4gICAgfVxyXG4gICAgY29udHJvbGxlcigkc2NvcGUpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gMTtcclxuICAgICAgICAkc2NvcGUuJHdhdGNoKCh0aGlzLm51bWJlciksKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0ID0gdmFsdWUgKiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXJlY3RpdmVGYWN0b3J5KCl7XHJcbiAgICAgICAgbWFpbkRpcmVjdGl2ZS5pbnN0YW5jZSA9bmV3IG1haW5EaXJlY3RpdmUoKTtcclxuICAgICAgICByZXR1cm4gbWFpbkRpcmVjdGl2ZS5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbkRpcmVjdGl2ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9iYWJlbC1sb2FkZXItcHJvdG90eXBlL2FwcC9zY3JpcHRzL2RpcmVjdGl2ZXMvbWFpbkRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=