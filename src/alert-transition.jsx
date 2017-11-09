import React from "react";
import { CSSTransition } from "react-transition-group";
import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";
import "./trainsition-styles.css";

const timeout = { enter: ENTER_TIMEOUT, exit: EXIT_TIMEOUT };

const AlertTransition = ({ ...props }) => {
	delete props.classes;
	const classes = {
		enterActive: "enterActive",
		enter: "enter",
		exit: "exit",
		exitActive: "exitActive"
	};
	return <CSSTransition timeout={timeout} classNames={classes} {...props} />;
};

export default AlertTransition;
