<script lang="ts">
    import { type Component } from "svelte";
    import { init, type Dispatch } from "./Routes/routes";
    import Header from "./layouts/Components/Headers/Header.svelte";
    import Footer from "./layouts/Footers/Footer.svelte";
    import { tickScroll } from "./lib/action/tick";

    let dispatch: Dispatch = $state<Dispatch>(init());
    let MainComponent: Component<Record<string, any>> | undefined =
        $state<undefined>();

    $effect(() => {
        if (!dispatch.validated.validated) return;
        MainComponent = dispatch.component as Component<Record<string, any>>;
        tickScroll();
    });

    addEventListener("popstate", function () {
        dispatch = init();
    });
</script>

<Header />
{#if MainComponent}
    <MainComponent />
{/if}
<Footer />
