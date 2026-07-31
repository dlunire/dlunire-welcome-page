<script lang="ts">
    import { type Component } from "svelte";
    import { init, type Dispatch } from "./Routes/routes";
    import Header from "./layouts/Components/Headers/Header.svelte";
    import Footer from "./layouts/Footers/Footer.svelte";

    let dispatch: Dispatch = init();

    addEventListener("popstate", function () {
        dispatch = init();
    });
</script>

<Header />
{#if dispatch.validated.validated}
    <svelte:component this={dispatch.component as Component} />
{/if}
<Footer />
