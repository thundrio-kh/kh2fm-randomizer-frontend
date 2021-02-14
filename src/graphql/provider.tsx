import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import React from "react";
import { ApolloProvider as Provider } from "react-apollo";

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI! });

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

export const ApolloProvider: React.FC = ({ children }) => {
	return <Provider client={client}>{children}</Provider>;
};
