<script lang="ts">
    import * as routing from "@dlunire/front-dlroute";
    import Welcome from "./layouts/Svelte/Welcome.svelte";
    import type { Component } from "svelte";

    routing.route("/welcome", Welcome);
    const dispath = routing.dispatch();

    const component: Component | null = dispath.component as Component | null;
</script>

{#if dispath.validated}
    <svelte:component this={component} />
{/if}