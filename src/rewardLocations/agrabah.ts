import { LocationName } from "../LocationName";
import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [Rewards.FIRE, Rewards.BLIZZARD, Rewards.THUNDER];

export const agrabahRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF826",
		reward: Rewards.DARK_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF832",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF83E",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF84A",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF856",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF862",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Agrabah",
		value: "11CDF86E",
		reward: Rewards.SERENITY_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Bazaar",
		value: "11CDF87A",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Bazaar",
		value: "11CDF886",
		reward: Rewards.POWER_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Bazaar",
		value: "11CDF892",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Bazaar",
		value: "11CDF89E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Bazaar",
		value: "11CDF8AA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.AGRABAH,
		description: "Palace Walls",
		value: "11CDF8B6",
		reward: Rewards.SKILL_RING,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Palace Walls",
		value: "11CDF8C2",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "The Cave of Wonders Entrance",
		value: "11CDF8CE",
		reward: Rewards.POWER_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "The Cave of Wonders Entrance",
		value: "11CDF8DA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Valley of Stone",
		value: "11CDF8E6",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Valley of Stone",
		value: "11CDF8F2",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Valley of Stone",
		value: "11CDF8FE",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Valley of Stone",
		value: "11CDF90A",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.AGRABAH,
		description: "Chasm of Challenges",
		value: "11CDF916",
		reward: Rewards.CAVE_OF_WONDERS_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Chasm of Challenges",
		value: "11CDF922",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Treasure Room",
		value: "11CDF92E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.AGRABAH,
		description: "Treasure Room",
		value: "11CDF93A",
		reward: Rewards.SERENITY_GEM,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.AGRABAH,
		description: "Ruined Chamber",
		value: "11CDF946",
		reward: Rewards.TORN_PAGES,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.AGRABAH,
		description: "Ruined Chamber",
		value: "11CDF952",
		reward: Rewards.RUINS_MAP,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.AGRABAH,
		description: "Abu Escort",
		value: "21D10DB8",
		reward: Rewards.SUMMON_BOOST,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.AGRABAH,
		description: "Volcanic Lord & Blizzard Lord",
		value: "21D10CE8",
		reward: Rewards.FINISHING_LEAP,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.AGRABAH,
		description: "Genie Jafar",
		value: "21D10978",
		reward: Rewards.FIRE,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.AGRABAH,
		description: "Agrabah Map",
		value: "11CE0792",
		reward: Rewards.AGRABAH_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.AGRABAH,
		description: "Lamp Charm",
		value: "11CE079E",
		reward: Rewards.LAMP_CHARM,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.AGRABAH,
		description: "Wishing Lamp",
		value: "11CE08B2",
		reward: Rewards.WISHING_LAMP,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];
