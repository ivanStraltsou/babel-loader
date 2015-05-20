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
	            var self = this;
	            $scope.$watch(self.number, function (value) {
	                self.output = self.number * 2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLHdFQUF3RTtNQUMzRjs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsaUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixtQkFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ25DLHFCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2NBQ2pDLENBQUM7VUFDTDs7O2dCQUNzQiw0QkFBRTtBQUNyQiwwQkFBYSxDQUFDLFFBQVEsR0FBRSxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQzVDLG9CQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7VUFDakM7OztZQWZDLGFBQWE7OztzQkFrQkosYUFBYSIsImZpbGUiOiIwLjIzYjA0ZTQ4Y2MyYjhkZDVlOGQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBtYWluRGlyZWN0aXZle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0FFJztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICdEaXJDdHJsJztcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiRGlyQ3RybC5udW1iZXJcIj48cD57e0RpckN0cmwub3V0cHV0fX08L3A+J1xyXG4gICAgfVxyXG4gICAgY29udHJvbGxlcigkc2NvcGUpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkc2NvcGUuJHdhdGNoKChzZWxmLm51bWJlciksKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYub3V0cHV0ID0gc2VsZi5udW1iZXIgKiAyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpe1xyXG4gICAgICAgIG1haW5EaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyBtYWluRGlyZWN0aXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW5EaXJlY3RpdmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5EaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9