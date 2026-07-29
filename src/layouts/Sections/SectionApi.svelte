<script lang="ts">
    import type { Api } from "$lib/types/type";
    import ApiCards from "../Components/Apis/ApiCards.svelte";
    import IconApi from "../Icons/IconApi.svelte";

    let apis: Api[] = [
        {
            name: "API first",
            description:
                "Controladores y rutas que devuelven JSON por defecto. HTML solo cuando la vista lo pide.",
            url: "",
        },
        {
            name: "Capas claras",
            description:
                "Tu app vive en <code>app/</code>, el kernel es <code>DLCore</code>, el HTTP es <code>DLRoute</code>. Nada de monolito forzado.",
            url: "",
        },
        {
            name: "AGPL + comercial",
            description:
                "Libre para desarrollar y auto-hospedar. Licencia comercial si necesitas despliegue cerrado.",
            url: "",
        },
    ];
</script>

<section class="section section--api" id="section-api">
    <div class="section__inner section__inner--api">
        <h2
            class="section__title section__title--api"
            aria-label="Diseñado para desarrolladores"
        >
            <IconApi />
            <span>Diseñado para desarrolladores</span>
        </h2>

        <p>
            Decisiones de diseño orientadas al control absoluto del código: un
            núcleo modular, un sistema de enrutamiento híbrido que combina
            autómatas finitos con expresiones regulares, y total libertad de
            desarrollo sin dependencias opacas.
        </p>
        <ApiCards {apis} />
    </div>
</section>
