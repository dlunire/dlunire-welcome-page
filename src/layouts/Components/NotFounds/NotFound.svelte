<script lang="ts">
    import { getBaseURL } from "@dlunire/front-dlroute";

    const baseUrl = getBaseURL() || "/";
</script>

<div class="dl-not-found">
    <div class="dl-not-found__container">
        <!-- Indicador visual superior -->
        <span class="dl-not-found__tag">ERROR 404</span>

        <!-- Título Principal estilo DLUnire -->
        <h1 class="dl-not-found__title">Página no encontrada</h1>

        <p class="dl-not-found__description">
            La ruta solicitada no existe, fue movida o el enrutador no logró
            resolver una coincidencia exacta.
        </p>

        <!-- Bloque técnico simulando la consola de tu documentación -->
        <div class="dl-not-found__console">
            <div class="dl-not-found__console-header">
                <span class="dl-not-found__console-title">DLROUTE · STATUS</span
                >
            </div>
            <div class="dl-not-found__console-body">
                <p class="dl-not-found__code-line">
                    <span class="dl-not-found__code-key">DL_STATUS</span>:
                    <span class="dl-not-found__code-type">string</span>
                    = <span class="dl-not-found__code-string">"not_found"</span>
                </p>
                <p class="dl-not-found__code-line">
                    <span class="dl-not-found__code-key">DL_MATCH</span>:
                    <span class="dl-not-found__code-type">boolean</span>
                    = <span class="dl-not-found__code-boolean">false</span>
                </p>
            </div>
        </div>

        <!-- Botón de acción con el estilo del Navbar -->
        <div class="dl-not-found__actions">
            <a href={baseUrl} class="dl-not-found__button">
                <svg
                    class="dl-not-found__button-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
                Volver al inicio
            </a>
        </div>
    </div>
</div>