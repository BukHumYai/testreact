import axios from "axios";

export async function fetchPokemon(pokename) {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/${pokeName}');
      return response?.data
    } catch (error) {
      return Promise.reject()
    }
  }