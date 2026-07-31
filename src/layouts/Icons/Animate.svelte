<script lang="ts">
    let {
        content,
        className,
        borderWidth,
        values,
    }: {
        content: Function;
        className: string;
        borderWidth?: number;
        values?: string[];
    } = $props();

    let stopValuesA: string = $derived(
        Array.isArray(values) ? values.join("; ") : "#0080ff; #ff6c00",
    );

    // Se copia el arreglo con [...values] para evitar mutar la variable original con reverse()
    let stopValuesB: string = $derived(
        Array.isArray(values)
            ? [...values].reverse().join("; ")
            : "#ff6c00; #0080ff",
    );
</script>

<!-- AnimatedBox.svelte -->
<svg width="0" height="0">
    <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%">
                <animate
                    attributeName="stop-color"
                    values={stopValuesA}
                    dur="4s"
                    repeatCount="indefinite"
                />
            </stop>
            <stop offset="100%">
                <animate
                    attributeName="stop-color"
                    values={stopValuesB}
                    dur="4s"
                    repeatCount="indefinite"
                />
            </stop>
        </linearGradient>
    </defs>
</svg>

<div class={className}>
    <svg class="border-svg" preserveAspectRatio="none">
        <rect
            class="animated-rect"
            x="2"
            y="2"
            rx="12"
            fill="none"
            stroke="url(#brandGradient)"
            stroke-width={borderWidth ?? 1}
        />
    </svg>
    <div class="content">
        {@render content()}
    </div>
</div>

<style>
    svg {
        position: absolute;
    }
    .animated-box {
        position: relative;
        display: inline-block;
    }
    .border-svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    /* El calc() se traslada aquí para ser válido según el estándar del DOM */
    .animated-rect {
        width: calc(100% - 4px);
        height: calc(100% - 4px);
    }
    .content {
        position: relative;
        padding: 1.5rem;
    }
</style>
