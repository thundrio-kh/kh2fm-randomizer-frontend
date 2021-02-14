import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface Provider {
	id: string;
	username: string;
}

interface User {
	_id: string;
	providers: {
		patreon?: Provider;
		twitch?: Provider;
		discord?: Provider;
	};
}

export const UserContext = createContext<User | null>(null);

export const UserContextProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		axios
			.get<User>("http://localhost:5000/api/user", { withCredentials: true })
			.then(response => {
				setUser(response.data);
				console.log(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
