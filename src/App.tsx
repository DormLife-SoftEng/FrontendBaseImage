import React from "react";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={() => <Homepage />} />
				<Route component={() => <PageNotFound />} />
			</Switch>
		</Router>
	);
}

export default App;
