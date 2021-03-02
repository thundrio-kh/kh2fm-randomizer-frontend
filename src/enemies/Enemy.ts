export enum EnemyType {
	HEARTLESS = "Heartless",
	NOBODY = "Nobody",
	MUSHROOM = "Mushroom",
	BOSS = "Boss",
	MISCELLANEOUS = "Miscellaneous",
}

export interface Enemy {
	type: EnemyType;
	name: string;
	value: string;
	limiter?: string;
	limiterOffset?: string;
	size?: number;
	rules?: {
		bannedFrom?: string[];
	};
}
