import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const organizationXIIIEnemyLocations: EnemyLocation[] = [
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.CAVERN_OF_REMEMBRANCE,
	// 	description: "Xemnas I Data Fight",
	// 	world: "12",
	// 	room: "13",
	// 	event: "61",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.XEMNAS_DATA,
	// 			value: "11C59BA8",
	// 		},
	// 	],
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xemnas II Data Fight",
		world: "12",
		room: "14",
		event: "62",
		enemies: [
			// {
			// 	enemy: Enemies.FINAL_XEMNAS_DATA,
			// 	value: "11C55AAC",
			// },
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xigbar Data Fight",
		maxSize: 2351052, // Hades II
		msnOffset: "004FA4A0",
		world: "12",
		room: "0A",
		event: "64",
		enemies: [
			{
				enemy: Enemies.XIGBAR_DATA,
				value: "11C4ACBC",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xaldin Data Fight",
		maxSize: 2854684, // Terra
		// msnOffset: "004FA4A0",
		world: "05",
		room: "0F",
		event: "61",
		enemies: [
			{
				enemy: Enemies.XALDIN_DATA,
				value: "11C5A1DC",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Vexen Data Fight",
		maxSize: 4443212, // Larxene
		// msnOffset: "004FA4E0",
		world: "04",
		room: "20",
		event: "92",
		enemies: [
			{
				enemy: Enemies.VEXEN_DATA,
				value: "11C598D4",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Lexaeus Data Fight",
		maxSize: 4443212, // Larxene
		msnOffset: "004FA4E0",
		world: "04",
		room: "21",
		event: "93",
		enemies: [
			{
				enemy: Enemies.LEXAUS_DATA,
				value: "11C56734",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.CAVERN_OF_REMEMBRANCE,
	// 	description: "Zexion Data Fight",
	// 	value: "11C59914",
	// 	enemy: Enemies.???,
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Saix Data Fight",
		maxSize: 3557686,  // Saix
		msnOffset: "004FA4C0",
		world: "12",
		room: "0F",
		event: "66",
		enemies: [
			{
				enemy: Enemies.SAIX_DATA,
				value: "11C521E0",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Axel Data Fight",
		maxSize: 4443212, // Larxene
		msnOffset: "004FA4A0",
		world: "02",
		room: "14",
		event: "D5",
		enemies: [
			{
				enemy: Enemies.AXEL_DATA,
				value: "11C5B0BC",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.CAVERN_OF_REMEMBRANCE,
	// 	description: "Demyx II Data Fight",
	// 	world: "04",
	// 	room: "04",
	// 	event: "72",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.DEMYX_DATA,
	// 			value: "11C4D054",
	// 		},
	// 	],
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Luxord Data Fight",
		world: "12",
		room: "0E",
		event: "65",
		enemies: [
			// {
			// 	enemy: Enemies.LUXORD_DATA,
			// 	value: "11C53700",
			// },
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Marluxia Data Fight",
		maxSize: 4443212, // Larxene
		// msnOffset: "004FA4A0",
		world: "04",
		room: "26",
		event: "96",
		enemies: [
			{
				enemy: Enemies.MARLUXIA_DATA,
				value: "11C59114",
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
		description: "Larxene Data Fight",
		world: "04",
		room: "21",
		event: "94",
		enemies: [
			// {
			// 	enemy: Enemies.LARXENE_DATA,
			// 	value: "11C56868",
			// },
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Roxas Data Fight",
		maxSize: 4443212, // Larxene
		// msnOffset: "004FA4A0",
		world: "12",
		room: "15",
		event: "63",
		enemies: [
			{
				enemy: Enemies.ROXAS_DATA,
				value: "11C4F13C",
			},
		],
	},
];
