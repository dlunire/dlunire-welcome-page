<script lang="ts">
    let { content = undefined }: { content?: Function } = $props();
</script>

{#if typeof content === "function"}
    {@render content()}
{/if}
