<svg width="0" height="0" style="position: absolute;">
    <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop class="stop-a" offset="0%" />
            <stop class="stop-b" offset="100%" />
        </linearGradient>
    </defs>
</svg>

<div class="brand-wrapper">
    <slot />
</div>

<style>
    .stop-a {
        animation: colorShiftA 4s infinite;
    }
    .stop-b {
        animation: colorShiftB 4s infinite;
    }

    .brand-wrapper {
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
</style>
