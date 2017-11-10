"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("./icon");

var _icon2 = _interopRequireDefault(_icon);

require("../trainsition-styles.css");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
	var _ref$type = _ref.type,
	    type = _ref$type === undefined ? "info" : _ref$type,
	    children = _ref.children,
	    headline = _ref.headline,
	    onDismiss = _ref.onDismiss,
	    _ref$dismissTitle = _ref.dismissTitle,
	    dismissTitle = _ref$dismissTitle === undefined ? "Dismiss" : _ref$dismissTitle,
	    _ref$showIcon = _ref.showIcon,
	    showIcon = _ref$showIcon === undefined ? true : _ref$showIcon;

	var isDismissable = !!onDismiss;
	var css = (isDismissable ? "dismissable" : "") + " alert-" + type + " alert";
	var dismiss = isDismissable ? _react2.default.createElement(
		"button",
		{
			type: "button",
			className: "close",
			title: dismissTitle,
			onClick: onDismiss
		},
		"\xD7"
	) : null;

	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"div",
			{ className: css },
			dismiss,
			showIcon ? _react2.default.createElement(_icon2.default, { className: "icon", type: type }) : null,
			_react2.default.createElement(
				"div",
				{ className: "msgContainer" },
				headline ? _react2.default.createElement(
					"h4",
					{ className: "headline" },
					headline
				) : null,
				_react2.default.createElement(
					"div",
					{ className: "alert-body" },
					children
				)
			)
		)
	);
};

exports.default = Alert;