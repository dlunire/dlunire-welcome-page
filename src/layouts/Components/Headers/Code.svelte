<script lang="ts">
    import { onMount } from "svelte";
    import { highlight } from "../../../lib/action/highlight";
    import HeaderCode from "./HeaderCode.svelte";

    let element: HTMLElement | null = null;

    let {
        content = $bindable(),
    }: {
        content?: Function | undefined;
    } = $props();

    onMount(() => {
        if (!(element instanceof HTMLElement)) return;
        console.log({ content: element.textContent });
    });
</script>

<div class="steps__code-container">
    <HeaderCode />
    <pre class="steps__code">
    <code class="code-command" use:highlight bind:this={element}>{@render content?.()}</code>
</pre>
</div>
