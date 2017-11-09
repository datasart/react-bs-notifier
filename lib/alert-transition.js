"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require("react-transition-group");

var _container = require("./container");

require("./trainsition-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var timeout = { enter: _container.ENTER_TIMEOUT, exit: _container.EXIT_TIMEOUT };

var AlertTransition = function AlertTransition(_ref) {
	var props = _objectWithoutProperties(_ref, []);

	delete props.classes;
	var classes = {
		enterActive: "enterActive",
		enter: "enter",
		exit: "exit",
		exitActive: "exitActive"
	};
	return _react2.default.createElement(_reactTransitionGroup.CSSTransition, _extends({ timeout: timeout, classNames: classes }, props));
};

exports.default = AlertTransition;