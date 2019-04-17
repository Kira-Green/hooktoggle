import React, { useState, useEffect } from "react";

const Dadjoke2 = props => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getJoke();
	}, []);

	async function getJoke() {
		const response = await fetch("https://icanhazdadjoke.com/", {
			method: "GET",
			headers: { Accept: "application/json" }
		})
			.then(response => response.json())
			.then(jsondata => setData(jsondata.joke));
	}

	return <div>{data}</div>;
};

export default Dadjoke2;
