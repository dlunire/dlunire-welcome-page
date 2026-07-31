<script lang="ts">
    let { content = undefined, id }: { content?: Function; id?: string } = $props();
</script>

{#if typeof content === "function"}
    <div class="container" id={id ?? 'home'}>
        {@render content()}
    </div>
{/if}
