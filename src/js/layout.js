import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { SignUp } from "./views/SignUp";
import { Feed } from "./views/Feed";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>{" "}
					<Route exact path="/signUp">
						<SignUp />
					</Route>
					<Route exact path="/feedPage">
						<Feed />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>{" "}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
