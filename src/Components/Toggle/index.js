import React, { useState } from "react";

function Toggle(props) {
	const [value, setValue] = useState(false);

	return (
		<div>
			<button onClick={() => setValue(!value)}>
				{value ? "ON" : "OFF"}
			</button>
		</div>
	);
}

export default Toggle;
