<script lang="ts">
    let {
        onclick = (event: MouseEvent) => {},
        content = undefined,
        menu = false,
        element = $bindable()
    }: {
        onclick?: (event: MouseEvent) => void;
        content?: Function,
        menu?: boolean,
        element?: HTMLElement|null
    } = $props();

    
</script>

<button
    class="button"
    aria-label="Text button"
    class:button--menu={menu}
    {onclick}
    bind:this={element}
>
    {#if typeof content === "function"}
        {@render content()}
    {:else}
        Text Button
    {/if}
</button>
