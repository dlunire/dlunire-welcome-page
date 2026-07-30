<!-- Code.svelte -->
<script lang="ts">
    import type { Component } from "svelte";
    import { highlight } from "../../../lib/action/highlight";
    import HeaderCode from "./HeaderCode.svelte";
    let {
        code,
        title,
        Icon,
    }: { code: string; title?: string; Icon?: Component<Record<string, any>> } =
        $props();
</script>

<div class="steps__code-container">
    <HeaderCode {title} {Icon} />
    <pre class="steps__code"><code class="code-command" use:highlight={code}>{code}</code></pre>
</div>
