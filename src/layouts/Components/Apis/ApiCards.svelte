<script lang="ts">
    import type { Api } from "$lib/types/type";
    import Animate from "../../Icons/Animate.svelte";
    let { apis = [] }: { apis: Api[] } = $props();
    let values: string[] = ["#0080ff", "#00ff00", "#00ffff", "#0080ff"];
</script>

<div class="api">
    {#each apis as { name, description, url }}
        <Animate className="api__item" {values} borderWidth={1}>
            {#snippet content()}
                <h3 class="api__title">{name}</h3>

                <div class="api__description">
                    <p>{@html description}</p>
                    <a href={url}>{url}</a>
                </div>
            {/snippet}
        </Animate>
    {/each}
</div>
