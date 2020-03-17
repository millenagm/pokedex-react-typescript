// To parse this data:
//
//   import { Convert } from "./pokemon";
//
//   const pokemons = Convert.toPokemonsList(json);

export interface Pokemon {
	id: number;
	name: Name;
	type: Type[];
	base: Base;
}

export interface Base {
	HP: number;
	Attack: number;
	Defense: number;
	"Sp. Attack": number;
	"Sp. Defense": number;
	Speed: number;
}

export interface Name {
	english: string;
	japanese: string;
	chinese: string;
	french: string;
}

export enum Type {
	Bug = "Bug",
	Dark = "Dark",
	Dragon = "Dragon",
	Electric = "Electric",
	Fairy = "Fairy",
	Fighting = "Fighting",
	Fire = "Fire",
	Flying = "Flying",
	Ghost = "Ghost",
	Grass = "Grass",
	Ground = "Ground",
	Ice = "Ice",
	Normal = "Normal",
	Poison = "Poison",
	Psychic = "Psychic",
	Rock = "Rock",
	Steel = "Steel",
	Water = "Water"
}

// Converts JSON strings to/from your types
export class Convert {
	public static toPokemonsList(json: any): Pokemon[] {
		return json;
	}

	public static jsonFromPokemonsList(value: Pokemon[]): string {
		return JSON.stringify(value);
	}

	public static formatId(id: number) {
		return String(id).padStart(3, "0");
	}
}
