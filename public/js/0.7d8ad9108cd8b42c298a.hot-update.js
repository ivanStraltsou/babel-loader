webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _controllersMainController = __webpack_require__(1);
	
	var _controllersMainController2 = _interopRequireDefault(_controllersMainController);
	
	var _servicesMainService = __webpack_require__(2);
	
	var _servicesMainService2 = _interopRequireDefault(_servicesMainService);
	
	var _directivesMainDirective = __webpack_require__(3);
	
	var _directivesMainDirective2 = _interopRequireDefault(_directivesMainDirective);
	
	angular.module('app', []).controller('MainController', _controllersMainController2['default']).service('MainService', _servicesMainService2['default']).directive('mainDirective', _directivesMainDirective2['default'].directiveFactory);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
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
	            this.number = 1;
	            var self = this;
	            $scope.$watch(this.number, function (value) {
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
])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9hcHAuanM/YTgxZSIsIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztzREFBMkIsQ0FBOEI7Ozs7Z0RBQ2pDLENBQXdCOzs7O29EQUN0QixDQUE0Qjs7OztBQUV0RCxRQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDcEIsVUFBVSxDQUFDLGdCQUFnQix5Q0FBaUIsQ0FDNUMsT0FBTyxDQUFDLGFBQWEsbUNBQWMsQ0FDbkMsU0FBUyxDQUFDLGVBQWUsRUFBRSxxQ0FBYyxnQkFBZ0IsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NQekQsYUFBYTtBQUNKLGNBRFQsYUFBYSxHQUNGOytCQURYLGFBQWE7O0FBRVgsYUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsYUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDOUIsYUFBSSxDQUFDLFFBQVEsR0FBRywwRUFBMEU7TUFDN0Y7O2tCQUxDLGFBQWE7O2dCQU1MLG9CQUFDLE1BQU0sRUFBQztBQUNkLGlCQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoQixpQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLG1CQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDbkMscUJBQUcsS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUNwQix5QkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUMzQjtjQUNKLENBQUM7VUFDTDs7O2dCQUNzQiw0QkFBRTtBQUNyQiwwQkFBYSxDQUFDLFFBQVEsR0FBRSxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQzVDLG9CQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7VUFDakM7OztZQWxCQyxhQUFhOzs7c0JBcUJKLGFBQWEiLCJmaWxlIjoiMC43ZDhhZDkxMDhjZDhiNDJjMjk4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXInXHJcbmltcG9ydCBNYWluU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL01haW5TZXJ2aWNlJ1xyXG5pbXBvcnQgbWFpbkRpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFpbkRpcmVjdGl2ZSdcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSlcclxuICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxyXG4gICAgLnNlcnZpY2UoJ01haW5TZXJ2aWNlJywgTWFpblNlcnZpY2UpXHJcbiAgICAuZGlyZWN0aXZlKCdtYWluRGlyZWN0aXZlJywgbWFpbkRpcmVjdGl2ZS5kaXJlY3RpdmVGYWN0b3J5KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9iYWJlbC1sb2FkZXItcHJvdG90eXBlL2FwcC9zY3JpcHRzL2FwcC5qc1xuICoqLyIsImNsYXNzIG1haW5EaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQUUnO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ0RpckN0cmwnO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuZy1tb2RlbD1cIkRpckN0cmwubnVtYmVyXCI+PHA+e3tEaXJDdHJsLm91dHB1dH19PC9wPidcclxuICAgIH1cclxuICAgIGNvbnRyb2xsZXIoJHNjb3BlKXtcclxuICAgICAgICB0aGlzLm51bWJlciA9IDE7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICRzY29wZS4kd2F0Y2goKHRoaXMubnVtYmVyKSwodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vdXRwdXQgPSB2YWx1ZSAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoKXtcclxuICAgICAgICBtYWluRGlyZWN0aXZlLmluc3RhbmNlID1uZXcgbWFpbkRpcmVjdGl2ZSgpO1xyXG4gICAgICAgIHJldHVybiBtYWluRGlyZWN0aXZlLmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluRGlyZWN0aXZlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2JhYmVsLWxvYWRlci1wcm90b3R5cGUvYXBwL3NjcmlwdHMvZGlyZWN0aXZlcy9tYWluRGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==