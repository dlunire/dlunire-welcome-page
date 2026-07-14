<script lang="ts">
    import IconCopy from "../../Icons/IconCopy.svelte";

    let copied: boolean = false;
    let code: HTMLPreElement | null = null;

    /**
     * Captura el evento click del usuario.
     *
     * @param event Evento de click del usuario.
     */
    async function onclick(event: MouseEvent): Promise<void> {
        const { target: button } = event;
        if (!(button instanceof HTMLElement)) return;
        if (!code) return;

        const text = code.textContent.trim();
        if (!text) return;
        await navigator.clipboard.writeText(text);

        copied = true;
        setTimeout(() => {
            copied = false;
        }, 2000);
    }
</script>

<div class="snippet">
    <header class="snippet__header">
        <h3 class="snippet__title" aria-label="Title">Crear Proyecto</h3>

        <ul class="tag">
            <li class="tag__item">dlunire/dlunire</li>
        </ul>
    </header>

    <div class="snippet__body">
        <div class="snippet__body-code">
            <pre class="snippet__code" bind:this={code}>
                <code class="command command--color">composer</code> create-project dlunire/dlunire my-app
            </pre>

            <button class="snippet__button snippet__button--copy" aria-label="Copy" {onclick}>
                <IconCopy bind:copied />
            </button>
        </div>

        <div class="snippet__body-info"></div>
    </div>
</div>
