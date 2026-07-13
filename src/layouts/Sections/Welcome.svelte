<script>
    import Content from "./Content.svelte";
    import Hero from "./Hero.svelte";

</script>
<Content>
    {#snippet content()}
        <Hero />
    {/snippet}
</Content>