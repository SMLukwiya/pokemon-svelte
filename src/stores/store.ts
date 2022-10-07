import {writable} from "svelte/store";
import {PokemonClient} from "pokenode-ts";
import type { Pokemon } from "src/lib/types";

export const pokemon = writable<Pokemon[]>([]);

const fetchPokeman = async () => {
    const api = new PokemonClient();
    const data_ = await api.listPokemons();

    const result = data_.results.map((data, idx: number) => {
        return {
            name: data.name,
            id: idx + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+1}.png`
        }
    });

    pokemon.set(result)
}

fetchPokeman();