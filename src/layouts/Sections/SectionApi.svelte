<script lang="ts">
    import type { Api } from "$lib/types/type";
    import ApiCards from "../Components/Apis/ApiCards.svelte";

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

<section class="section section--api">
    <div class="section__inner section__inner--api">
        <ApiCards {apis} />
    </div>
</section>
