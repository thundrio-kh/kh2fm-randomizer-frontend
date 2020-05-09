import { Reward } from "../Reward";
import { bonusRewards } from "./bonus";
import { cavernOfRememberanceRewards } from "./cavernOfRememberance";
import { criticalRewards } from "./critical";
import { donaldRewards } from "./Donald";
import { formRewards } from "./form";
import { goofyRewards } from "./Goofy";
import { hollowBastionRewards } from "./hollowBastion";
import { popupRewards } from "./popup";
import { simulatedTwilightTownRewards } from "./simulatedTwilightTown";
import { twilightTownRewards } from "./twilightTown";

export const rewardLocations: Reward[] = [
	...popupRewards,
	...bonusRewards,
	...goofyRewards,
	...donaldRewards,
	...formRewards,
	...criticalRewards,
	...simulatedTwilightTownRewards,
	...twilightTownRewards,
	...hollowBastionRewards,
	...cavernOfRememberanceRewards,
];
