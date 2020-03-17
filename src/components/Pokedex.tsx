import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getPokemons } from "../services/pokedex";
import { Pokemon } from "../models/pokemon";
import logo from "../logo.svg";

function Pokedex() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const isLoading = pokemons.length === 0;

	useEffect(() => {
		getPokemons().then(list => setPokemons(list));
	}, []);

	const Loading = () => (
		<img
			className="poke-loading"
			src={logo}
			width={20}
			style={{ opacity: "80%" }}
		/>
	);

	const List = () => (
		<div>
			{pokemons.map((p, i) => (
				<Card key={i} pokemon={p} />
			))}
		</div>
	);

	return (
		<div>
			<h1>Pokedex</h1>
			{isLoading ? <Loading /> : <List />}
		</div>
	);
}

export default Pokedex;
