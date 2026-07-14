<script>
    import Footer from "../Footers/Footer.svelte";
    import Content from "./Content.svelte";
    import Hero from "./Hero.svelte";
</script>

<Content>
    {#snippet content()}
        <Hero />
    {/snippet}
</Content>

<Footer />
