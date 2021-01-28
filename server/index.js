const express = require("express");
const {
	createSeed,
	GameMode,
	defaultExperimental,
	defaultGoAModSettings,
	defaultInclude,
	defaultSettings,
	defaultWorlds,
} = require("../lib/kh2fm-randomizer/dist");

const app = express();

app.get("/seed", (req, res) => {
	const seed = createSeed({
		name: "Funny seed name",
		gameMode: {
			mode: GameMode.GOA_MOD,
			goa: defaultGoAModSettings,
		},
		settings: defaultSettings,
		include: defaultInclude,
		worlds: defaultWorlds,
		experimental: defaultExperimental,
	});

	const text = seed.reduce((result, { location, reward }) => {
		if (reward.value.length === 4) {
			return (
				result +
				`\tWriteShort(0x${location.value.substring(1)}, 0x${reward.value})\n`
			);
		}

		return (
			result +
			`\tWriteByte(0x${location.value.substring(1)}, 0x${reward.value})\n`
		);
	}, "");

	res.send(`
function _OnInit()
end

function _OnFrame()
${text}	
end
	`);
});

app.get("/ping", (req, res) => {
	res.json({ pong: "hello from server!", test: 123 });
});

app.listen(3000, () => {
	console.log("Server running at localhost:3000");
});
