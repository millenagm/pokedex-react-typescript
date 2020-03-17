import { Convert, Pokemon } from "../models/pokemon";

const apiUrl = "https://millenagm.github.io/fakeapi/pokedex";

const getPokemons = async (): Promise<Pokemon[]> => {
	const response = await fetch(`${apiUrl}/json/`);
	const json = await response.json();
	return Convert.toPokemonsList(json["pokemons"]);
};

const getThumbUrl = (id: number): string => {
	const padZero = Convert.formatId(id);
	return `${apiUrl}/thumbnails/${padZero}.png`;
};

export { getPokemons, getThumbUrl };
