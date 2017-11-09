import React from "react";

import Icon from "./icon";
import "../trainsition-styles.css";
import "./styles.css";

const Alert = ({
	type = "info",
	children,
	headline,
	onDismiss,
	dismissTitle = "Dismiss",
	showIcon = true
}) => {
	const isDismissable = !!onDismiss;
	const css = `${isDismissable ? "dismissable" : ""} alert-${type} alert`;
	const dismiss = isDismissable ? (
		<button
			type="button"
			className="close"
			title={dismissTitle}
			onClick={onDismiss}
		>
			×
		</button>
	) : null;

	return (
		<div>
			{/* this classless container div is used by the transition group above... don't delete it */}
			<div className={css}>
				{dismiss}

				{showIcon ? <Icon className="icon" type={type} /> : null}
				<div className="msgContainer">
					{headline ? <h4 className="headline">{headline}</h4> : null}
					<div className="body">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Alert;
