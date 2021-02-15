import { defaultConfiguration } from "@valaxor/kh2fm-randomizer";
import {
	Configuration,
	Experimental,
	GoAModSettings,
	Include,
	Seed,
	Settings,
	Worlds,
} from "@valaxor/kh2fm-randomizer/dist/types";
import { GameMode } from "@valaxor/kh2fm-randomizer/dist/types/enums";
import React, { useMemo, useState } from "react";
import { useConfigQuery } from "../hooks/useConfigQuery";
import { useSeed } from "../hooks/useSeed";
import { useSeedName } from "../hooks/useSeedName";

interface SeedContextType {
	seed: Seed | null;
	error: any;
	loading: boolean;
	configuration: Configuration;
	seedName: {
		name: string;
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onRandomSeed: () => void;
	};
	settings: [Settings, React.Dispatch<React.SetStateAction<Settings>>];
	worlds: [Worlds, React.Dispatch<React.SetStateAction<Worlds>>];
	include: [Include, React.Dispatch<React.SetStateAction<Include>>];
	experimental: [
		Experimental,
		React.Dispatch<React.SetStateAction<Experimental>>
	];
	gameMode: {
		mode: GameMode;
		goa: [GoAModSettings, React.Dispatch<React.SetStateAction<GoAModSettings>>];
	};
}

export const SeedContext = React.createContext<SeedContextType>({} as any);

export const SeedContextProvider: React.FC = ({ children }) => {
	const query = useConfigQuery();

	const seedName = useSeedName();

	const [settings, setSettings] = useState<Settings>({
		...defaultConfiguration.settings,
		...(query.settings || {}),
	});

	const [worlds, setWorld] = useState<Worlds>({
		...defaultConfiguration.worlds,
		...(query.worlds || {}),
	});

	const [include, setInclude] = useState<Include>({
		...defaultConfiguration.include,
		...(query.include || {}),
	});

	const [goa, setGoA] = useState<GoAModSettings>({
		...defaultConfiguration.gameMode.goa,
		...(query.goa || {}),
	});

	const [experimental, setExperimental] = useState<Experimental>(
		defaultConfiguration.experimental
	);

	const configuration = useMemo<Configuration>(
		() => ({
			name: seedName.name,
			settings,
			worlds,
			include,
			experimental,
			gameMode: { mode: settings.gameMode, goa },
		}),
		[seedName.name, settings, worlds, include, experimental, goa]
	);

	const seed = useSeed(configuration);

	return (
		<SeedContext.Provider
			value={{
				...seed,
				configuration,
				seedName,
				settings: [settings, setSettings],
				worlds: [worlds, setWorld],
				include: [include, setInclude],
				experimental: [experimental, setExperimental],
				gameMode: { mode: settings.gameMode, goa: [goa, setGoA] },
			}}
		>
			{children}
		</SeedContext.Provider>
	);
};
