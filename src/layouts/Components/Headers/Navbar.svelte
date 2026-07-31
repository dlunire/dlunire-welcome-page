<script lang="ts">
    import IconCircleDown from "../../Icons/IconCircleDown.svelte";
    import IconCircleRight from "../../Icons/IconCircleRight.svelte";
    import IconDLUnire from "../../Icons/IconDLUnire.svelte";
    import IconLegal from "../../Icons/IconLegal.svelte";
    import IconSection from "../../Icons/IconSection.svelte";
    import ButtonMenu from "../Buttons/ButtonMenu.svelte";
    import Link from "../Links/Link.svelte";
    import Window from "../Windows/Window.svelte";

    let open: boolean = false;
</script>

<nav class="header__nav">
    <div class="header__nav-item">
        <Link href="/#home" className="logo">
            {#snippet content()}
                <IconDLUnire />
                <div class="logo__text">
                    <h2 class="logo__title">
                        <span class="logo__title-first">DL</span>
                        <span class="logo__title-second">Unire</span>
                    </h2>
                    <p class="logo__label">PHP • API FIRST</p>
                </div>
            {/snippet}
        </Link>
    </div>

    <div class="header__nav-item">
        <ButtonMenu bind:open />
    </div>
</nav>

<Window
    bind:open
    windowMenu={true}
    title="Navegación"
    Icon={IconCircleDown}
    iconSize={20}
>
    {#snippet content()}
        <div class="navigation">
            <div class="navigation__description">
                <h2 class="navigation__title">
                    <IconSection />
                    <span>Navegación entre secciones</span>
                </h2>
            </div>
        </div>
        <ul class="menu">
            <li class="menu__item">
                <Link className="menu__link" href="/#home">
                    {#snippet content()}
                        <IconCircleRight />
                        <span>HOME</span>
                    {/snippet}
                </Link>
            </li>

            <li class="menu__item">
                <Link href="#section-api" className="menu__link">
                    {#snippet content()}
                        <IconCircleRight />
                        <span>API</span>
                    {/snippet}
                </Link>
            </li>

            <li class="menu__item">
                <Link className="menu__link" href="/#quickstart">
                    {#snippet content()}
                        <IconCircleRight />
                        <span>Inicio rápido</span>
                    {/snippet}
                </Link>
            </li>

            <li class="menu__item">
                <Link className="menu__link" href="/#model">
                    {#snippet content()}
                        <IconCircleRight />
                        <span>Uso del modelo</span>
                    {/snippet}
                </Link>
            </li>

            <li class="menu__item">
                <Link className="menu__link" href="/#footer">
                    {#snippet content()}
                        <IconLegal />
                        <span>Contenido legal</span>
                    {/snippet}
                </Link>
            </li>
        </ul>

        <div class="navigation">
            <div class="navigation__description"></div>
        </div>
    {/snippet}
</Window>
