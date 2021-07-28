import { Fragment } from "react";
import "../styles/styles.scss";

export const Pointer = ({ moneyLeft }) => {
	return (
		<Fragment>
			<div className="pointer">
				<div className="box">
					{moneyLeft > 0 && (
						<h1>${moneyLeft} still needed to fund this project</h1>
					)}
					{moneyLeft <= 0 && <h1>We have reached our goal!</h1>}
				</div>
				<div className="triangle"></div>
			</div>
		</Fragment>
	);
};
