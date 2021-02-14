import { useCallback, useState } from "react";

export const useToggle = (
	initialState: boolean
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
	const [state, setState] = useState(initialState);

	const toggleState = useCallback(() => {
		setState(current => !current);
	}, []);

	return [state, toggleState, setState];
};
