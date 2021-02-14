import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./firebase";
import { ApolloProvider } from "./graphql/provider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={"/"}>
			<ApolloProvider>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (localStorage.getItem("offlineMode")) {
	serviceWorker.register();
} else {
	serviceWorker.unregister();
}
