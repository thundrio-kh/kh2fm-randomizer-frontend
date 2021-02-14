import React, { createContext } from "react";
import { UserQuery, useUserQuery } from "../../graphql/generated";

export const UserContext = createContext<UserQuery["user"] | null>(null);

export const UserContextProvider: React.FC = ({ children }) => {
	const { data } = useUserQuery();

	return (
		<UserContext.Provider value={data?.user ?? null}>
			{children}
		</UserContext.Provider>
	);
};
