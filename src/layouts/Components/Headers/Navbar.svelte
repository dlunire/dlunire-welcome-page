<script lang="ts">
    import IconDLUnire from "../../Icons/IconDLUnire.svelte";
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
                        <span>DL</span>
                        <span>Unire</span>
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

<Window bind:open windowMenu={true}>
    {#snippet content()}
        <ul class="menu">
            <li class="menu__item">
                <Link className="menu__link" href="/#quickstart">
                    {#snippet content()}
                        <span>QuickStart</span>
                    {/snippet}
                </Link>
            </li>

            <li class="menu__item">
                <Link href="#hero" className="menu__link">
                    {#snippet content()}
                        <span>Hero</span>
                    {/snippet}
                </Link>
            </li>

            <li class="menu__item">
                <Link href="#section-api" className="menu__link">
                    {#snippet content()}
                        <span>API</span>
                    {/snippet}
                </Link>
            </li>
        </ul>
    {/snippet}
</Window>
