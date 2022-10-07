<script lang="ts">
    import type {Pokemon} from "$lib/types"
    export let pokemon: Pokemon;
</script>

<a href={`/pokemon/${pokemon.id}`} class="p-6 bg-gray-100 text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
    <img class="h-40 w-40" src={pokemon.image} alt={pokemon.name} />
    <h2 class="uppercase text-2xl">{pokemon.id} {pokemon.name}</h2>
</a>