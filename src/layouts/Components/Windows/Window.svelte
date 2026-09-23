<script lang="ts">
    import { onMount, type Component } from "svelte";
    import IconClose from "../../Icons/IconClose.svelte";
    import IconDLUnire from "../../Icons/IconDLUnire.svelte";
    import Header from "../Headers/Header.svelte";

    let {
        content,
        iconSize,
        open = $bindable<boolean>(),
        windowMenu = false,
        windowModal = false,
        title = $bindable(),
        Icon = IconDLUnire,
        navigation = $bindable<HTMLElement[]>([]),
    }: {
        open: boolean;
        navigation: HTMLElement[];
        windowMenu?: boolean;
        windowModal?: boolean;
        title?: string;
        content?: Function;
        Icon?: Component<Record<string, any>>;
        iconSize?: number;
    } = $props();

    let windowWrapperRef: HTMLElement | null = $state<null>(null);
    let windowRef: HTMLElement | null = $state<null>(null);
    let titleRef: HTMLElement | null = $state<null>(null);
    let headerRef: HTMLElement | null = $state<null>(null);

    // Variables que no son elementos HTML o componentes:
    let navigationHeight: number = 0;

    onMount(() => {
        if (!(windowWrapperRef instanceof HTMLElement)) return;
        document.body.appendChild(windowWrapperRef);
    });

    function windowState() {
        if (windowMenu) return;
        open
            ? document.body.style.setProperty("overflow", "hidden")
            : document.body.style.setProperty("overflow", "auto");

        if (headerRef instanceof HTMLElement) {
            const height = headerRef.getBoundingClientRect().height;
            windowRef?.style.setProperty("--header-height", `${height}px`);
        }
    }

    $effect(() => {
        windowState();

        if (titleRef instanceof HTMLElement) {
            titleRef.style.setProperty("--icon-size", `${iconSize ?? 20}px`);
        }
    });

    function windowClose() {
        open = false;
    }

    document.addEventListener("click", function (event: MouseEvent) {
        const { target: element } = event;

        if (!(element instanceof HTMLElement)) return;

        const omit: boolean =
            element === headerRef ||
            element === windowRef ||
            element instanceof HTMLButtonElement;

        if (omit) return;

        const isAnchor: boolean = element instanceof HTMLAnchorElement;
        const container: HTMLElement | null = element.closest(".window");
        const isWindow: boolean = container === windowRef;

        if (!isAnchor && isWindow) return;

        windowClose();
    });

    let windowContainer: HTMLElement | null = $state(null);

    interface Container {
        menuHeight: string;
        headerHeight: string;
    }

    $effect(() => {
        let observer: ResizeObserver | null = null;

        if (
            !(windowContainer instanceof HTMLElement) ||
            navigation.length < 1 ||
            !(windowRef instanceof HTMLElement)
        )
            return;

        // menuHeight = rect.height - navigation;
        // windowContainer.style.setProperty("--menu-height", `${menuHeight}px`);

        /**
         * Carga los datos de tamaño de los elementos en cuanto se haya terminado la animación
         * del contenedor.
         *
         * @returns
         */
        function animationEnd(event: AnimationEvent): void {
            const { target: container } = event;
            if (!(container instanceof HTMLElement)) return;

            observer = new ResizeObserver(() => {
                if (
                    !(windowContainer instanceof HTMLElement) ||
                    !(headerRef instanceof HTMLElement)
                )
                    return;

                let height: number = 0;

                for (const element of navigation) {
                    if (!(element instanceof HTMLElement)) continue;
                    height += element.getBoundingClientRect().height;
                }

                const mainHeight: number =
                    container.getBoundingClientRect().height;

                const headerHeight: number =
                    headerRef.getBoundingClientRect().height;

                const containerHeight: number = mainHeight - headerHeight;

                console.log({ height, containerHeight, headerHeight });

                windowContainer.style.setProperty(
                    "--menu-height",
                    `${containerHeight - height}px`,
                );

                windowContainer.style.setProperty(
                    "--header-height",
                    `${containerHeight}px`,
                );
            });

            observer.observe(container);
        }

        windowRef.addEventListener("animationend", animationEnd, {
            once: true,
        });

        return () => {
            windowRef?.removeEventListener("animationend", animationEnd);
            observer?.disconnect();
        };
    });
</script>

{#if open}
    <div
        class="window-container"
        class:window-container--menu={windowMenu}
        bind:this={windowWrapperRef}
    >
        <div
            class="window"
            class:window--menu={windowMenu}
            class:window--modal={windowModal}
            bind:this={windowRef}
        >
            <header class="window__header" bind:this={headerRef}>
                <h2 class="window__title" bind:this={titleRef}>
                    {#if Icon}
                        <Icon />
                    {/if}
                    {title ?? "Título por defecto"}
                </h2>
                <button
                    class="button button--close-window"
                    aria-label="Cerrar ventana"
                    onclick={windowClose}
                >
                    <IconClose />
                </button>
            </header>
            <!-- {#if !windowMenu}
            {/if} -->

            <div class="window__container" bind:this={windowContainer}>
                {#if content}
                    {@render content()}
                {/if}
            </div>
        </div>
    </div>
{/if}

<!-- Esta es una PaymentRequestUpdateEvent | Test Project -->
