import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokedex() {
  const { pokeName } = useParams();
  const [pokedex, setPokedex] = useState(undefined);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokedex({
          name: data?.name,
          height: data?.height,
        });
      })
      .catch((err) => setPokedex(undefined));
    return () => {};
  }, []);

  //   const fetchData = async () => {
  //     let pokemonData = await fetchpokemon(pokeName);
  //     if (pokemonData != undefined) {
  //       console.log("pokemon != undefined", pokemonData);
  //       setPokedex({
  //         name: pokemonData?.name,
  //         height: pokemonData?.height,
  //       });
  //     } else {
  //       setPokedex(undefined);
  //     }
  //   };
  return (
    <div>
      {pokedex != undefined ? (
        <>
          <b>name: {pokedex?.name}</b>&nbsp;<b>height: {pokedex?.height}</b>
        </>
      ) : (
        <>
          <b>not found pokemon</b>
        </>
      )}
    </div>
  );
}
export default Pokedex;
