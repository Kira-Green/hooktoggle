import React from "react";
import { useFetch } from "../Hooks";
function Dadjoke() {
	const [data, loading] = useFetch("https://sv443.net/jokeapi/category/Any");
	return (
		<>
			<h1>Joke</h1>
			{loading ? "Loading..." : <p>{data.joke}</p>}
		</>
	);
}
export default Dadjoke;
