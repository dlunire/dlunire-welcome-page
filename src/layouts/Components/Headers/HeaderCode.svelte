<script lang="ts">
    import IconCopy from "../../Icons/IconCopy.svelte";
    import IconFile from "../../Icons/IconFile.svelte";

    let copied: boolean = false;

    async function handleCopy(event: MouseEvent): Promise<void> {
        const { target: button } = event;
        if (!(button instanceof HTMLElement)) return;

        const stepItem: HTMLElement | null = button.closest(".steps__item");
        if (!(stepItem instanceof HTMLElement)) return;

        const code: HTMLPreElement | null = stepItem.querySelector("pre");
        if (!(code instanceof HTMLPreElement)) return;

        const codeText: string = (code.textContent ?? "").trim();

        await navigator.clipboard.writeText(codeText.trim());
        copied = true;

        await new Promise((resolve) => setTimeout(resolve, 2000));
        copied = false;
    }
</script>

<header class="steps__code-header">
    <h4 class="steps__code-title" aria-label="Terminal">
        <IconFile />
        <span>Terminal</span>
    </h4>

    <button
        class="button button--copy"
        aria-label="Copiar código"
        onclick={handleCopy}
    >
        <IconCopy bind:copied />
        <!-- <span class="button__label">Copiar</span> -->
    </button>
</header>
