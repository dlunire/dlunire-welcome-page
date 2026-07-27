<script lang="ts">
    import IconClose from "../../Icons/IconClose.svelte";

    let {
        content,
        open = $bindable(),
        windowMenu = $bindable(),
        windowModal = $bindable(),
        title = $bindable(),
    }: {
        open: boolean;
        windowMenu: boolean;
        windowModal: boolean;
        title?: string;
        content?: Function;
    } = $props();
</script>

{#if open}
    <div class="container-window">
        <div
            class="window"
            class:window--menu={windowMenu}
            class:window--modal={windowModal}
        >
            {#if !windowMenu}
                <header class="window__header">
                    <h2 class="window__title">
                        {title ?? "Título por defecto"}
                    </h2>
                    <button
                        class="button button--close-window"
                        aria-label="Cerrar ventana"
                    >
                        <IconClose />
                    </button>
                </header>
            {/if}

            <div class="window__container">
                {#if content}
                    {@render content()}
                {/if}
            </div>
        </div>
    </div>
{/if}

<!-- Esta es una PaymentRequestUpdateEvent | Test Project -->
