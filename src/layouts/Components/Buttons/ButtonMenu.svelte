<script lang="ts">
    import Button from "./Button.svelte";

    let open: boolean = false;
    function onclick(event: MouseEvent): void {
        const { target: button } = event;
        if (!(button instanceof HTMLButtonElement)) return;

        open = !open;
        button.dataset.menu = String(open);

        console.log({ open });
    }
</script>

<Button {onclick} menu={true}>
    {#snippet content()}
        <span></span><span></span><span></span>
        <span>Menú</span>
    {/snippet}
</Button>
