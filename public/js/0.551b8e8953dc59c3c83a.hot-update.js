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
	        this.template = '../../app/templates/mainDirectiveTemplate.html';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYmFiZWwtbG9hZGVyLXByb3RvdHlwZS9hcHAvc2NyaXB0cy9kaXJlY3RpdmVzL21haW5EaXJlY3RpdmUuanM/NjVlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7S0FBTSxhQUFhO0FBQ0osY0FEVCxhQUFhLEdBQ0Y7K0JBRFgsYUFBYTs7QUFFWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixhQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM5QixhQUFJLENBQUMsUUFBUSxHQUFHLGdEQUFnRDtNQUNuRTs7a0JBTEMsYUFBYTs7Z0JBTUwsb0JBQUMsTUFBTSxFQUFDO0FBQ2QsaUJBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGlCQUFJLENBQUMsTUFBTSxHQUFHLFVBQVMsR0FBRyxFQUFDO0FBQ3ZCLHFCQUFHLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDbEIseUJBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztrQkFDekI7Y0FDSixDQUFDO1VBQ0w7OztnQkFDc0IsNEJBQUU7QUFDckIsMEJBQWEsQ0FBQyxRQUFRLEdBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUM1QyxvQkFBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1VBQ2pDOzs7WUFqQkMsYUFBYTs7O3NCQW9CSixhQUFhIiwiZmlsZSI6IjAuNTUxYjhlODk1M2RjNTljM2M4M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIG1haW5EaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQUUnO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ0RpckN0cmwnO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnLi4vLi4vYXBwL3RlbXBsYXRlcy9tYWluRGlyZWN0aXZlVGVtcGxhdGUuaHRtbCdcclxuICAgIH1cclxuICAgIGNvbnRyb2xsZXIoJHNjb3BlKXtcclxuICAgICAgICB0aGlzLm51bWJlciA9IDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbih2YWwpe1xyXG4gICAgICAgICAgICBpZih2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQgPSB2YWwgKiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXJlY3RpdmVGYWN0b3J5KCl7XHJcbiAgICAgICAgbWFpbkRpcmVjdGl2ZS5pbnN0YW5jZSA9bmV3IG1haW5EaXJlY3RpdmUoKTtcclxuICAgICAgICByZXR1cm4gbWFpbkRpcmVjdGl2ZS5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbkRpcmVjdGl2ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9iYWJlbC1sb2FkZXItcHJvdG90eXBlL2FwcC9zY3JpcHRzL2RpcmVjdGl2ZXMvbWFpbkRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=