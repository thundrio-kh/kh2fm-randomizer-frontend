import {
	ApolloClient,
	ApolloProvider as Provider,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
import React from "react";
import { UserQuery } from "./user/query";

const client = new ApolloClient({
	cache: new InMemoryCache({ addTypename: false }),
});

client.setLink(
	new HttpLink({
		uri: process.env.REACT_APP_GRAPHQL_URI!,
		credentials: "include",
	})
);

client.query({ query: UserQuery });

export const ApolloProvider: React.FC = ({ children }) => {
	return <Provider client={client}>{children}</Provider>;
};
