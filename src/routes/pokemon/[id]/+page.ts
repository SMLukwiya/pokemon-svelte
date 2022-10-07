import {PokemonClient} from "pokenode-ts";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({params} : {params: Record<string, number>}) {
    const api = new PokemonClient();
    const id = params.id;

    const pokemon = await api.getPokemonById(id);

    if (pokemon) {
        return {pokemon};
    }
    
    throw error(404, 'Not found');
}