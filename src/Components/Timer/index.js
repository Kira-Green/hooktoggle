import React, { useState, useEffect } from "react";

const Timer = () => {
	const [time, setTime] = useState(0);

	const tick = () => {
		setTime(t => t + 1);
	};

	const reset = () => {
		setTime(0);
	};

	useEffect(() => {
		console.log("counting");
		let timerID = setInterval(tick, 1000);
		return () => clearInterval(timerID);
	}, [time]);

	return (
		<div>
			<p>{`${Math.floor(time / 3600)
				.toString()
				.padStart(2, "0")}:${Math.floor(time / 60)
				.toString()
				.padStart(2, "0")}:${(time % 60)
				.toString()
				.padStart(2, "0")}`}</p>
			<button onClick={reset}>Restart</button>
		</div>
	);
};

export default Timer;
