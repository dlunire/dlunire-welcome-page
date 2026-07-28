<script lang="ts">
    import Button from "./Button.svelte";

    let { open = $bindable<boolean>() }: { open: boolean } = $props();
    let buttonElement: HTMLButtonElement | null = $state(null);

    function onclick(event: MouseEvent): void {
        const { target: button } = event;
        if (!(button instanceof HTMLButtonElement)) return;

        open = !open;
        button.dataset.menu = String(open);
    }

    $effect(() => {
        if (!(buttonElement instanceof HTMLButtonElement)) return;
        buttonElement.dataset.menu = String(open);
    });
</script>

<Button {onclick} menu={true} bind:element={buttonElement}>
    {#snippet content()}
        <span></span><span></span><span></span>
        <span>Menú</span>
    {/snippet}
</Button>
