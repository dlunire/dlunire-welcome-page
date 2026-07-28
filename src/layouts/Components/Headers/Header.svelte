<script lang="ts">
    import { onMount } from "svelte";
    import Navbar from "./Navbar.svelte";

    let element: HTMLElement | null = null;

    onMount(() => {
        if (!(element instanceof HTMLElement)) return;
        const size = element.getBoundingClientRect();

        document.body.style.setProperty("--header-height", `${size.height}px`);
    });
</script>

<header class="header" bind:this={element}>
    <Navbar />
</header>
