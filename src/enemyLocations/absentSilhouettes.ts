import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const absentSilhouettesEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Vexen AS Fight",
		maxSize: 4443212, // Larxene
		// msnOffset: "004FA4E0",
		world: "04",
		room: "20",
		event: "73",
		enemies: [
			{
				value: "11C597A0",
				enemy: Enemies.VEXEN_AS,
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Lexaeus AS Fight",
		maxSize: 4443212, // Larxene
		msnOffset: "004FA4E0",
		world: "04",
		room: "21",
		event: "8E",
		enemies: [
			{
				value: "11C56368",
				enemy: Enemies.LEXAEUS_AS,
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Zexion AS Fight",
		world: "04",
		room: "22",
		event: "97",
		enemies: [
			// {
			// 	value: "11C597E0",
			// 	enemy: Enemies.ZEXION_AS,
			// },
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Marluxia AS Fight",
		maxSize: 4443212, // Larxene
		world: "04",
		room: "26",
		event: "91",
		// msnOffset: "004FA4E0",
		enemies: [
			{
				value: "11C58FE0",
				enemy: Enemies.MARLUXIA_AS,
				// patches: {
				// 	all: [
				// 		{
				// 			name: "Don't turn off player control",
				// 			codes: [
				// 				"204fa564 00000089",
				// 				"204fa568 00600000"
				// 			]
				// 		}
				// 	] 
				// },
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Larxene AS Fight",
		maxSize: 4443212, // Larxene
		world: "04",
		msnOffset: "004FA4A0",
		room: "21",
		event: "8F",
		enemies: [
			{
				value: "11C5649C",
				enemy: Enemies.LARXENE_AS,
			},
		],
	},
];
