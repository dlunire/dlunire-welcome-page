<script lang="ts">
    import "highlight.js/styles/atom-one-dark.css"; // o el tema que uses
    import IconQuick from "../Icons/IconQuick.svelte";
    import Code from "../Components/Headers/Code.svelte";
</script>

<section class="section section--quickstart">
    <div class="section__inner section__inner--quickstart">
        <h2
            class="section__title section__title--quickstart"
            aria-label="QuickStart"
        >
            <IconQuick />
            <span>Inicio Rápido</span>
        </h2>

        <p>Pasos para iniciar rápidamente</p>
        <div class="steps">
            <div class="steps__item">
                <h3 class="steps__title" aria-label="Paso 1: Instalar Dlunire">
                    Paso 1: Instalar Dlunire
                </h3>
                <p
                    class="steps__description"
                    aria-label="Instalar Dlunire en tu proyecto"
                >
                    Instala el skeleton. Composer trae dlcore, y con él dlroute
                    y dlstorage.
                </p>

                <Code>
                    {#snippet content()}
                        composer create-project dlunire/dlunire my-project
                        cd my-project
                    {/snippet}
                </Code>
            </div>

            <div class="steps__item">
                <h3 class="steps__title" aria-label="Paso 2: Registrar la ruta">
                    Paso 2: Registrar la ruta
                </h3>
                <p
                    class="steps__description"
                    aria-label="Registrar la ruta en el archivo de configuración"
                >
                    Registra la ruta en el archivo de configuración.
                </p>
                <Code>
                    {#snippet content()}
                        &lt;?php
                        use DLRoute\Requests\DLRoute;

                        DLRoute::get('/api/health', fn () => [
                            'status' => 'ok',
                        ]);
                {/snippet}
                </Code>
            </div>
        </div>
    </div>
</section>
