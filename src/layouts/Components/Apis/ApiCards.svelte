<script lang="ts">
    import type { Api } from "$lib/types/type";
    let { apis = [] }: { apis: Api[] } = $props();
</script>

<div class="api">
    {#each apis as { name, description, url }}
        <div class="api__item">
            <h3 class="api__title">{name}</h3>

            <div class="api__description">
                <p>{@html description}</p>
                <a href={url}>{url}</a>
            </div>
        </div>
    {/each}
</div>
