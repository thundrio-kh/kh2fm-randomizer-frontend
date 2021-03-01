import { gql } from "@apollo/client";

export const createSeed = gql`
	mutation CreateSeed($name: String!, $configuration: ConfigurationInput!) {
		createSeed(name: $name, configuration: $configuration) {
			id
			name
		}
	}
`;
