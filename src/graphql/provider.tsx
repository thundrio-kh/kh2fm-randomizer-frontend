import { ApolloProvider as Provider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import React from "react";
import { UserQuery } from "./user/query";

const httpLink = new HttpLink({
	uri: process.env.REACT_APP_GRAPHQL_URI!,
	credentials: "include",
});

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

client.query({ query: UserQuery });

export const ApolloProvider: React.FC = ({ children }) => {
	return <Provider client={client}>{children}</Provider>;
};
