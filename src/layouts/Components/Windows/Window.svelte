<script lang="ts">
    import { onMount } from "svelte";
    import IconClose from "../../Icons/IconClose.svelte";

    let {
        content,
        open = $bindable(),
        windowMenu = false,
        windowModal = false,
        title = $bindable(),
    }: {
        open: boolean;
        windowMenu?: boolean;
        windowModal?: boolean;
        title?: string;
        content?: Function;
    } = $props();

    let windowRef: HTMLElement | null = $state(null);

    onMount(() => {
        if (!(windowRef instanceof HTMLElement)) return;
        document.body.appendChild(windowRef);
    });

    function windowState() {
        if (windowMenu) return;
        open
            ? document.body.style.setProperty("overflow", "hidden")
            : document.body.style.setProperty("overflow", "auto");
    }

    $effect(() => windowState());
</script>

{#if open}
    <div
        class="window-container"
        class:window-container--menu={windowMenu}
        bind:this={windowRef}
    >
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
