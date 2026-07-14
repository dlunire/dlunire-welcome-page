<script lang="ts">
    import * as engine from "@dlunire/front-dlroute";

    import Link from "../Components/Links/Link.svelte";
    import IconDLUnire from "../Icons/IconDLUnire.svelte";
    import IconEcosystem from "../Icons/IconEcosystem.svelte";
    import IconFacebook from "../Icons/IconFacebook.svelte";
    import IconGitHub from "../Icons/IconGitHub.svelte";
    import IconLegal from "../Icons/IconLegal.svelte";
    import IconShare from "../Icons/IconShare.svelte";
    import IconX from "../Icons/IconX.svelte";
</script>

<footer class="footer">
    <div class="footer__container">
        <div class="footer__brand">
            <Link href="/#home" className="footer__logo">
                {#snippet content()}
                    <IconDLUnire />

                    <div class="footer__logo-info">
                        <h3 class="footer__logo-title">DLUnire</h3>
                        <p>PHP • API FIRST</p>
                    </div>
                {/snippet}
            </Link>
            <p class="footer__tagline">
                Herramientas y APIs de alto rendimiento con cero dependencias
                para la construcción de software.
            </p>

            <p class="footer__tagline">
                NIT 700551569-1 &middot; Establecimiento de Comercio Registrado
            </p>
        </div>

        <nav class="footer__nav">
            <h4 class="footer__title">
                <IconEcosystem />
                <span>Ecosistema</span>
            </h4>
            <ul class="footer__links">
                <li class="footer__links-item">
                    <a
                        href="https://github.com/dlunire/dlparse"
                        target="_blank"
                        rel="nofollow"
                        class="footer__links-link">DLParse (en desarrollo)</a
                    >
                </li>
                <li class="footer__links-item">
                    <a
                        href="https://github.com/dlunire/dlroute"
                        target="_blank"
                        rel="nofollow"
                        class="footer__links-link">DLRoute (Sistema de rutas)</a
                    >
                </li>
                <li class="footer__links-item">
                    <a
                        href="https://github.com/dlunire/dlcore"
                        target="_blank"
                        rel="nofollow"
                        class="footer__links-link">DLCore (núcleo de DLUnire)</a
                    >
                </li>
                <li class="footer__links-item">
                    <a
                        href="https://open-vsx.org/extension/dlunire/dlunire-envtype"
                        target="_blank"
                        rel="nofollow"
                        class="footer__links-link">DL Typed Environment</a
                    >
                </li>
            </ul>
        </nav>

        <nav class="footer__nav">
            <h4 class="footer__title">
                <IconLegal />
                <span>Información Legal</span>
            </h4>
            <ul class="footer__links">
                <li class="footer__links-item">
                    <Link href="/terms" className="footer__links-link">
                        {#snippet content()}
                            Términos del Servicio
                        {/snippet}
                    </Link>
                </li>
                <li class="footer__links-item">
                    <a href="/privacidad" class="footer__links-link"
                        >Política de Privacidad</a
                    >
                </li>
                <li class="footer__links-item">
                    <a href="/cookies" class="footer__links-link"
                        >Política de Cookies</a
                    >
                </li>
            </ul>
        </nav>

        <nav class="footer__nav">
            <h4 class="footer__title">
                <IconShare />
                <span>Redes Sociales</span>
            </h4>

            <ul class="social-media">
                <li class="social-media__item">
                    <a
                        href="https://www.facebook.com/profile.php?id=61575156278078"
                        rel="nofollow"
                        target="_blank"
                        class="social-media__link"
                    >
                        <IconFacebook />
                    </a>
                </li>
                <li class="social-media__item">
                    <a
                        href="https://github.com/dlunire"
                        rel="nofollow"
                        target="_blank"
                        class="social-media__link"><IconGitHub /></a
                    >
                </li>
                <li class="social-media__item">
                    <a
                        href="https://x.com/dlunire"
                        rel="nofollow"
                        target="_blank"
                        class="social-media__link"
                    >
                        <IconX />
                    </a>
                </li>
            </ul>

            <h4 class="footer__title">Infomación de contacto</h4>
            <ul class="footer__contact">
                <li class="footer__contact-item">
                    <strong>Teléfono:</strong>
                    <a
                        href="tel:+573026488528"
                        class="footer__contact-link"
                        rel="nofollow"
                    >
                        +57 302 648 8528
                    </a>
                </li>
                <li class="footer__contact-item">
                    <strong>Correo:</strong>
                    <a
                        href="mailto:ventas@dlunire.dev"
                        aria-label="ventas@dlunire.dev"
                        class="footer__contact-link"
                        rel="nofollow"
                        target="_blank"
                    >
                        ventas@dlunire.dev
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="footer__bottom">
        <div class="footer__bottom-container">
            <p>&copy; 2026 DLUnire. Todos los derechos reservados.</p>
            <p class="footer__legal-id">Powered by David E Luna M</p>
        </div>
    </div>
</footer>
