<script lang="ts">
    import { type Component } from "svelte";
    import { init, type Dispatch } from "./Routes/routes";
    import Header from "./layouts/Components/Headers/Header.svelte";

    let dispatch: Dispatch = init();

    addEventListener("popstate", function () {
        dispatch = init();
    });
</script>

{#if dispatch.validated.validated}
    <Header />
    <svelte:component this={dispatch.component as Component} />
{:else}
    <svelte:component this={dispatch.component as Component} />
{/if}
