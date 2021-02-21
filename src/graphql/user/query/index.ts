import { gql } from "@apollo/client";

export const UserQuery = gql`
	query User {
		user {
			id
			providers {
				patreon {
					...ProviderData
				}
				twitch {
					...ProviderData
				}
				discord {
					...ProviderData
				}
			}
		}
	}

	fragment ProviderData on Provider {
		id
		username
		email
	}
`;
