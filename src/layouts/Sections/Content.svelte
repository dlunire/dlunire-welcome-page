<script lang="ts">
    let { content = undefined }: { content?: Function } = $props();
</script>

{#if typeof content === "function"}
    <div class="container" id="home">
        {@render content()}
    </div>
{/if}
