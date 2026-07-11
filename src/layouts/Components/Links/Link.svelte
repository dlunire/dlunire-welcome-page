<script lang="ts">
    import * as dlroute from "@dlunire/front-dlroute";

    interface Scheme {
        http: true;
        https: true;
        mailto: true;
    }

    export let content: Function | null = null;
    export let href: string;
    export let rest: { [x: string]: string } = {};
    export let className: string | null = null;

    /** Separador de protocolo */
    const COLON: string = ":";

    /** Elemeto HTML capturado */
    let element: HTMLAnchorElement | null = null;

    const scheme: Scheme = {
        http: true,
        https: true,
        mailto: true,
    };

    function schemeValid(
        href: string,
        offset: number,
        event: MouseEvent,
    ): void {
        const stringScheme: string = href.substring(0, offset);
        const isValid: boolean = scheme[stringScheme as keyof Scheme] ?? false;

        console.log({ stringScheme });
        if (!isValid) {
            event.preventDefault();
            throw new Error(
                `El esquema «${stringScheme}» es un protocolo inválido`,
            );
        }
    }

    function navigate(event: MouseEvent): void {
        let offset = 0;

        for (const char of href) {
            if (char === COLON && offset > 0) {
                schemeValid(href, offset, event);

                if (element instanceof HTMLAnchorElement) {
                    element.rel = "nofollow";
                    element.target = "_blank";
                }

                return;
            }

            offset++;
        }

        event.preventDefault();
        history.pushState({}, "", dlroute.asset(href));
        window.dispatchEvent(new PopStateEvent("popstate"));
    }
</script>

<a {href} class={className} onclick={navigate} {...rest} bind:this={element}>
    {#if typeof content === "function"}
        {@render content()}
    {:else}
        <span>Texto de enlace</span>
    {/if}
</a>
