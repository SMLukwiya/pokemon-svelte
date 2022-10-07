<script lang="ts">
    import {pokemon} from "../stores/store";
    import Card from "../components/Card.svelte";
    import type {Pokemon} from "$lib/types";

    let search = "";
    let data: Pokemon[] = [];

    $: {
        if (search) {
            data = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(search.toLowerCase()));
        } else {
            data = [...$pokemon];
        }
    }
</script>

<svelte:head>
    <title>Pokerdex</title>
</svelte:head>

<h1 class="text-4xl text-center uppercase">Welcome to SvelteKit</h1>

<input 
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200" 
    type="text" 
    placeholder="Search Pokemon" 
    bind:value={search}
    />
<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
    {#each data as pokeman}
        <Card pokemon={pokeman} />
    {/each}
</div>
