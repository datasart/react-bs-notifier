import React from "react";
import { TransitionGroup } from "react-transition-group";
import {
	any,
	arrayOf,
	func,
	node,
	object,
	oneOfType,
	shape,
	string
} from "prop-types";
import Container, { PropTypes as ContainerPropTypes } from "./container";
import Alert, { PropTypes as AlertPropTypes } from "./alert-timer";
import AlertTransition from "./alert-transition";

import "./container/styles.css";

const AlertList = ({ position, alerts, onDismiss, ...props }) => (
	<Container position={position} className="container">
		<TransitionGroup>
			{alerts.map(item => {
				const dismiss = onDismiss ? () => onDismiss(item) : null;

				const { message, ...alertProps } = item;

				return (
					<AlertTransition key={item.id}>
						<Alert {...props} {...alertProps} onDismiss={dismiss}>
							{message}
						</Alert>
					</AlertTransition>
				);
			})}
		</TransitionGroup>
	</Container>
);

const { timeout, type, headline } = AlertPropTypes;

AlertList.propTypes = {
	...ContainerPropTypes,
	alerts: arrayOf(
		shape({
			id: any.isRequired,
			type,
			headline,
			message: oneOfType([string, node, object]).isRequired
		})
	).isRequired,
	onDismiss: func,
	timeout
};

export default AlertList;
