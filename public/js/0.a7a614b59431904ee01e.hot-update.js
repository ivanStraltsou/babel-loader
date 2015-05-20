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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLDRCQUE0QjtNQUMvQzs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsaUJBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGlCQUFJLENBQUMsTUFBTSxHQUFHLFVBQVMsR0FBRyxFQUFDO0FBQ3ZCLHFCQUFHLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDbEIseUJBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztrQkFDekI7Y0FDSixDQUFDO1VBQ0w7OztnQkFDc0IsNEJBQUU7QUFDckIsMEJBQWEsQ0FBQyxRQUFRLEdBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUM1QyxvQkFBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1VBQ2pDOzs7WUFqQkMsYUFBYTs7O3NCQW9CSixhQUFhIiwiZmlsZSI6IjAuYTdhNjE0YjU5NDMxOTA0ZWUwMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIG1haW5EaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQUUnO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ0RpckN0cmwnO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnbWFpbkRpcmVjdGl2ZVRlbXBsYXRlLmh0bWwnXHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24odmFsKXtcclxuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0ID0gdmFsICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpe1xyXG4gICAgICAgIG1haW5EaXJlY3RpdmUuaW5zdGFuY2UgPW5ldyBtYWluRGlyZWN0aXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW5EaXJlY3RpdmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5EaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9