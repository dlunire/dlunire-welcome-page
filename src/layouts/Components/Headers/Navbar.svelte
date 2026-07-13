<script>
    import IconDLUnire from "../../Icons/IconDLUnire.svelte";
    import ButtonMenu from "../Buttons/ButtonMenu.svelte";
    import Link from "../Links/Link.svelte";
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
        <ButtonMenu />
    </div>
</nav>
