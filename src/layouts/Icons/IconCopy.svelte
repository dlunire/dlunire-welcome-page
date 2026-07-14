<script lang="ts">
    let { copied = $bindable(true) } = $props();
</script>

{#if copied}
    <svg
       width="14.038499mm"
       height="10.446191mm"
       viewBox="0 0 14.038499 10.446191"
       version="1.1"
       id="copied-check"
       aria-label="Copied"
       class:zoom-in={copied}
       xmlns="http://www.w3.org/2000/svg">
      <defs
         id="defs2" />
      <g
         id="layer1"
         transform="translate(-108.00072,-113.8499)">
        <g
           id="SVGRepo_bgCarrier"
           stroke-width="0"
           transform="matrix(0.26458333,0,0,0.26458333,112.67955,113.31205)" />
        <g
           id="SVGRepo_tracerCarrier"
           stroke-linecap="round"
           stroke-linejoin="round"
           transform="matrix(0.26458333,0,0,0.26458333,112.67955,113.31205)" />
        <g
           id="SVGRepo_iconCarrier"
           transform="matrix(1.1699044,0,0,1.1699044,100.98112,105.66039)">
          <g
             id="path1051">
            <path
               d="M 16.292969,7.2929687 10,13.585938 7.7070312,11.292969 a 1,1 0 0 0 -1.4140625,0 1,1 0 0 0 0,1.414062 l 2.8906251,2.890625 c 0.4422304,0.441572 1.1901382,0.442675 1.6328122,0 l 6.890625,-6.8906247 a 1,1 0 0 0 0,-1.4140626 1,1 0 0 0 -1.414062,0 z"
               id="path1268" />
          </g>
        </g>
      </g>
    </svg>
{:else}
    <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Copy"
        class:zoom-in={!copied}
        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g><g id="SVGRepo_iconCarrier">
            <path d="M0 0H10V4H4V10H0V0Z" fill="#000000"></path>
            <path d="M16 6H6V16H16V6Z" fill="#000000"></path>
        </g></svg
    >
{/if}

<style>
    svg {
        min-width: var(--icon-width) !important;
        min-height: var(--icon-height) !important;
        max-width: var(--icon-width);
        max-height: var(--icon-height);
    }

    path {
        fill: var(--icon-color);
        transition: 300ms ease fill;
    }

    .zoom-in {
        animation: 300ms ease zoom-in;
    }
</style>
