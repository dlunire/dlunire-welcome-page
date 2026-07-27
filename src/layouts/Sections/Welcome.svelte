<script>
    import Footer from "../Footers/Footer.svelte";
    import Content from "./Content.svelte";
    import Hero from "./Hero.svelte";
    import QuickStart from "./QuickStart.svelte";
    import SectionApi from "./SectionApi.svelte";
</script>

<Content>
    {#snippet content()}
        <Hero />
        <SectionApi />
        <QuickStart />
    {/snippet}
</Content>
<Footer />
