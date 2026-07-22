<script>
    import Footer from "../Footers/Footer.svelte";
    import Animate from "../Icons/Animate.svelte";
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

<Animate>
    <section class="section">
    <span>Ciencia de la computación</span>

    </section>
</Animate>

<Footer />
