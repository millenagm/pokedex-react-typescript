import React from "react";
import { Pokemon, Convert } from "../models/pokemon";
import { getThumbUrl } from "../services/pokedex";

interface CardProps {
	pokemon: Pokemon;
}

const styles = {
	p: {
		lineHeight: "60%",
		fontSize: "80%"
	},
	wrapper: {
		display: "inline-block",
		margin: 8,
		borderRadius: 8
	},
	imgContainer: {
		backgroundColor: "#f9f9f9",
		padding: 8,
		borderRadius: 8,
		maxWidth: 80
	},
	img: {
		width: "100%",
		height: undefined,
		aspectRatio: "1"
	}
};

const Card = ({ pokemon }: CardProps) => (
	<div style={styles.wrapper}>
		<div style={styles.imgContainer}>
			<img
				src={getThumbUrl(pokemon.id)}
				style={styles.img}
				alt={pokemon.name.english}
			/>
		</div>
		<div>
			<p style={{ ...styles.p, color: "#919191" }}>
				#{Convert.formatId(pokemon.id)}
			</p>
			<p style={{ ...styles.p, fontWeight: "bold" }}>{pokemon.name.english}</p>
			<p style={{ ...styles.p, fontWeight: "lighter", fontSize: "65%" }}>
				{pokemon.type.join("|")}
			</p>
		</div>
	</div>
);

export default Card;
