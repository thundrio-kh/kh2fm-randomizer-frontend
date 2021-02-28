import { gql } from "@apollo/client";

export const UserQuery = gql`
	query User {
		user {
			id
			providers {
				patreon {
					id
					username
					email
				}
				twitch {
					id
					username
					email
				}
				discord {
					id
					username
					email
				}
			}
			seed {
				id
				name
			}
		}
	}
`;
