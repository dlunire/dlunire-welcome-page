<script>
    import Footer from "../Footers/Footer.svelte";
    import Content from "./Content.svelte";
    import Hero from "./Hero.svelte";
    import QuickStart from "./QuickStart.svelte";
</script>

<Content>
    {#snippet content()}
        <Hero />
        <QuickStart />
    {/snippet}
</Content>

<Footer />
