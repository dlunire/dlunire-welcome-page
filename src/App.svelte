<script lang="ts">
    import { type Component } from "svelte";
    import { init, type Dispatch } from "./Routes/routes";
    import Header from "./layouts/Components/Headers/Header.svelte";
    import Footer from "./layouts/Footers/Footer.svelte";
    import { tickScroll } from "./lib/action/tick";
    import NotFound from "./layouts/Components/NotFounds/NotFound.svelte";

    let dispatch: Dispatch = $state<Dispatch>(init());
    let MainComponent: Component<Record<string, any>> | undefined =
        $state<undefined>();

    $effect(() => {
        if (!dispatch.validated.validated) {
            MainComponent = NotFound;
            return;
        }
        MainComponent = dispatch.component as Component<Record<string, any>>;
        tickScroll();
    });

    addEventListener("popstate", function () {
        dispatch = init();
    });
</script>

{#if MainComponent === NotFound}
    <MainComponent />
{:else}
    <Header />
    <MainComponent />
    <Footer />
{/if}
