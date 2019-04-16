import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "../src/Components/Toggle";
import Timer from "../src/Components/Timer";
import Dadjoke from "./Components/Dadjoke";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>

					{/* <Toggle />
					<Timer /> */}
					<Dadjoke />
				</header>
			</div>
		);
	}
}

export default App;
