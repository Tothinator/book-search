import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/saved" component={Saved} />
					<Route component={Search} />
				</Switch>
			</div>
		</Router>
	)
}

export default App;
