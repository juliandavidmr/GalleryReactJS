webpackHotUpdate(0,{

/***/ 251:
/*!************************************!*\
  !*** ./src/components/App/App.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 75), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 83), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 85), React = __webpack_require__(/*! react */ 144); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 144);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _App = __webpack_require__(/*! ./App.scss */ 252);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.state = {
	      count: 0
	    };
	
	
	    _this.handleIncrement = _this.handleIncrement.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: "handleIncrement",
	    value: function handleIncrement() {
	      console.log("Holaaa");
	      this.setState({
	        count: this.state.count + 1
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          "Hola reactjs con ES6 2"
	        ),
	        _react2.default.createElement(
	          "h4",
	          null,
	          "Count: ",
	          this.props.count
	        ),
	        _react2.default.createElement(
	          "button",
	          { type: "button", "class": "btn btn-danger", onclick: this.handleIncrement },
	          "Sumar"
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	App.defaultProps = {
	  count: 0
	};
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 256); if (makeExportsHot(module, __webpack_require__(/*! react */ 144))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.2b3bd85746f057cf3ac8.hot-update.js.map