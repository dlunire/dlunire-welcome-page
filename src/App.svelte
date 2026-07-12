<script lang="ts">
    import { type Component } from "svelte";
    import { init, type Dispatch } from "./Routes/routes";
    import Header from "./layouts/Components/Headers/Header.svelte";
    import Footer from "./layouts/Footers/Footer.svelte";
    import Content from "./layouts/Sections/Content.svelte";
    import { asset } from "@dlunire/front-dlroute";

    let dispatch: Dispatch = init();

    addEventListener("popstate", function () {
        dispatch = init();
    });

    const test: string = asset("/materiales.png");

    console.log({ test });
</script>

{#if dispatch.validated.validated}
    <Header />
    <Content>
        <svelte:component this={dispatch.component as Component} />
    </Content>
    <Footer />
{:else}
    <svelte:component this={dispatch.component as Component} />
{/if}
