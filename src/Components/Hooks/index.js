import { useState, useEffect } from "react";

function useFetch(url) {
	console.log("in fetch", url);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	async function fetchUrl() {
		const response = await fetch(url);
		const json = await response.json();
		console.log("res", json);
		setData(json);
		setLoading(false);
	}
	useEffect(() => {
		fetchUrl();
	}, []);
	console.log(data);
	return [data, loading];
}
export { useFetch };
