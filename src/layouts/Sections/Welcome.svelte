<script>
    import Content from "./Content.svelte";
    import Hero from "./Hero.svelte";
    import QuickStart from "./QuickStart.svelte";
    import SectionApi from "./SectionApi.svelte";
    import Model from "./Model.svelte";
</script>

<Content>
    {#snippet content()}
        <Hero />
        <SectionApi />
        <QuickStart />
        <Model />
    {/snippet}
</Content>
