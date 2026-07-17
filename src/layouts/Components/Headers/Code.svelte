<!-- Code.svelte -->
<script lang="ts">
    import { highlight } from "../../../lib/action/highlight";
    import HeaderCode from "./HeaderCode.svelte";

    let { code }: { code: string } = $props();
</script>

<div class="steps__code-container">
    <HeaderCode />
    <pre class="steps__code">
        <code class="code-command" use:highlight={code}>
            {code}
        </code>
    </pre>
</div>
