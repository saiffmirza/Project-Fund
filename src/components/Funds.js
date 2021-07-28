import { Fragment, useState, useEffect } from "react";
import "../styles/styles.scss";
import { Pointer } from "./Pointer";

export const Funds = () => {
	const [count, setCount] = useState(0);
	const [amount, setAmount] = useState();
	const [moneyLeft, setMoneyLeft] = useState(5000);
	const [submission, setSubmission] = useState(true);

	const increment = () => {
		if (amount >= 5) {
			setCount(count + 1);
		} else {
			setSubmission(false);
		}
		setMoneyLeft(moneyLeft - amount);
		document.getElementById("amount").value = "";
	};

	const donation = (e) => {
		if (e >= 5) {
			setAmount(e);
		}
	};

	useEffect(() => {
		const progressBar = () => {
			const progress = document.getElementById("progressed");
			let width = ((5000 - moneyLeft) / 5000) * 100;
			if (width <= 100) {
				progress.style.width = width + "%";
			} else {
				progress.style.width = "100%";
			}
		};
		progressBar();
		setAmount(0);
		setSubmission(true);
	}, [count, moneyLeft]);

	return (
		<Fragment>
			<div className="funds">
				<div className="background">
					<Pointer moneyLeft={moneyLeft} />
					<div className="bar">
						<div
							id="progressed"
							style={{
								borderRadius:
									moneyLeft <= 0 ? "10px 10px 0px 0px" : "10px 0px 0px 0px",
							}}
						></div>
					</div>
					<div className="content">
						<h1>Only four days left to fund this project</h1>
						{count === 0 && <h2>Be the first to donate!</h2>}
						{count > 0 && (
							<h2>
								Join the <span style={{ color: "black" }}>{count}</span> other
								{count === 1 ? " donor who has" : " donors who have"} already
								supported this project
							</h2>
						)}

						<div className="submit-wrap">
							<p className="dollar-sign">$</p>
							<input
								type="text"
								id="amount"
								onChange={(e) => donation(e.target.value)}
							/>
							<button onClick={increment}>Give Now</button>

							<p>{submission ? "" : "Not a valid input. Please try again."}</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
