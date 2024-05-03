import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../api/fetchPokemon";
export default function Pokedata({ pokemonName }) {
  const [imageUrl, setImageUrl] = useState("");
  console.log(pokemonName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(pokemonName);
        setImageUrl(pokemonData.sprites.front_default);
      } catch (error) {
        console.error("Failed to fetch Pokemon image", error);
      }
    };
    fetchData();
  }, [pokemonName]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt={pokemonName} className="size-64" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
