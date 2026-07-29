<!-- Code.svelte -->
<script lang="ts">
    import { highlight } from "../../../lib/action/highlight";
    import HeaderCode from "./HeaderCode.svelte";
    let { code, title }: { code: string; title?: string } = $props();
</script>

<div class="steps__code-container">
    <HeaderCode {title} />
    <pre class="steps__code"><code class="code-command" use:highlight={code}>{code}</code></pre>
</div>
