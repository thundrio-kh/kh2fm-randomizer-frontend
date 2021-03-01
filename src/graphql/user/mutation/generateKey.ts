import { gql } from "@apollo/client";

export const UserGenerateKey = gql`
	mutation GenerateKey {
		generateKey
	}
`;
