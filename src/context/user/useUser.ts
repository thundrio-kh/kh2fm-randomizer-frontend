import { useContext } from "react";
import { UserContext } from ".";

export const useUser = () => {
	return useContext(UserContext);
};
