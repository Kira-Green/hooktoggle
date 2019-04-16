import React, { useState } from "react";

function Countdown(props) {
	const [time, setTime] = useState(0);

	return (
		<div>
			<h1>{time}</h1>
		</div>
	);
}

const Timer = () => {
	const [time, setTime] = useState(0);

	const tick = () => {
		setTime((t = t + 1));
	};

	useEffect(() => {});
};

export default Countdown;
