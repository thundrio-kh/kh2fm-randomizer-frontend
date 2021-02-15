import { defaultConfiguration } from "@valaxor/kh2fm-randomizer";
import {
	Configuration,
	GoAModSettings,
} from "@valaxor/kh2fm-randomizer/dist/types";
import _ from "lodash";
import { useContext, useMemo } from "react";
import { SeedContext } from "../context/seed";

function difference<T>(object: T, base: T) {
	// as any cause I have no idea why it's wrong but it works
	return _.transform<T, T>(object as any, (result, value, key) => {
		if (!_.isEqual(value, base[key])) {
			result[key] =
				_.isObject(value) && _.isObject(base[key])
					? difference(value, base[key])
					: value;
		}
	});
}

export type ConfigDiff = Omit<
	Configuration,
	"name" | "gameMode" | "experimental"
> & {
	goa: GoAModSettings;
};

export const useConfigDiff = (): ConfigDiff => {
	const { configuration } = useContext(SeedContext);

	return useMemo(
		() => ({
			settings: difference(
				configuration.settings,
				defaultConfiguration.settings
			),
			worlds: difference(configuration.worlds, defaultConfiguration.worlds),
			include: difference(configuration.include, defaultConfiguration.include),
			goa: difference(
				configuration.gameMode.goa,
				defaultConfiguration.gameMode.goa
			),
		}),
		[
			configuration.settings,
			configuration.worlds,
			configuration.include,
			configuration.gameMode.goa,
		]
	);
};
