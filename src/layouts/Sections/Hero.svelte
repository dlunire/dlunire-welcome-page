<script>
    import Snippet from "../Components/Cards/Snippet.svelte";
    import IconDLUnire from "../Icons/IconDLUnire.svelte";
</script>

<section class="section section--hero">
    <div class="section__inner section__inner--hero section__inner--column">
        <div class="section__column">
            <div class="section__column-tag">
                <ul class="tag">
                    <li class="tag__item">PHP 8.2+</li>
                </ul>

                <span class="tag__label"
                    >Modular • Unidades que se conectan</span
                >
            </div>

            <div class="section__inner-info">
                <h2
                    class="section__title section__title--hero"
                    aria-label="Título de sección"
                >
                    <div class="logo logo--hero">
                        <IconDLUnire />
                    </div>
                    <div class="flex">
                        <span>DL</span>
                        <span>Unire</span>
                    </div>
                </h2>

                <section class="section__inner-description">
                    <p>
                        Framework PHP orientado a API: rutas JSON,
                        controladores, ORM y .env.type. Skeleton listo para
                        producir, kernel DLCore, HTTP con DLRoute y
                        almacenamiento DLStorage. Las plantillas HTML son
                        opcionales (p. ej. esta bienvenida); el foco es backend
                        y APIs.
                    </p>
                </section>
            </div>

            <ul class="tag">
                <li class="tag__item">API / JSON</li>
                <li class="tag__item">ORM</li>
                <li class="tag__item tag__item--light">Rutas HTTP</li>
                <li class="tag__item tag__item--command">
                    <code>.env.type</code>
                </li>
                <li class="tag__item tag__item--primary">Credenciales</li>
                <li class="tag__item tag__item--light">Project::run()</li>
            </ul>
        </div>
        <div class="section__column">
            <Snippet />
        </div>
    </div>
</section>
