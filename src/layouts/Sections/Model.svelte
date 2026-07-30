<script lang="ts">
    import "highlight.js/styles/atom-one-dark.css"; // o el tema que uses
    import Code from "../Components/Headers/Code.svelte";
    import model from "$lib/examples/model.txt?raw";
    import modelType from "$lib/examples/model.type.txt?raw";
    import ProductsController from "$lib/examples/product-controller.txt?raw";
    import outputJSON from "$lib/examples/output-json.txt?raw";

    import IconDatabase from "../Icons/IconDatabase.svelte";
    import Link from "../Components/Links/Link.svelte";
    import IconPHP from "../Icons/IconPHP.svelte";
    import IconCircleRight from "../Icons/IconCircleRight.svelte";
</script>

<section class="section section--quickstart" id="model">
    <div class="section__inner section__inner--model">
        <h2 class="section__title section__title--model" aria-label="Modelo">
            <IconDatabase />
            <span>Uso del modelo</span>
        </h2>

        <p>Pasos para iniciar rápidamente</p>
        <div class="steps">
            <!-- Paso 1 -->
            <div class="steps__item">
                <h3
                    class="steps__title"
                    aria-label="Paso 1: Definir la conexión"
                >
                    <span>Definir los datos de la conexión</span>
                </h3>
                <p
                    class="steps__description"
                    aria-label="Configurar el archivo .env.type"
                ></p>

                <p>
                    Defina los datos de conexión en <code>.env.type</code>. Si
                    su tabla usa un prefijo (por ejemplo
                    <code>dl_products</code>), indíquelo con
                    <code>DL_PREFIX</code>; el modelo lo tendrá en cuenta al
                    inferir el nombre de la tabla.
                </p>

                <Code
                    code={modelType.trim()}
                    title="DLUnire • /.env.type"
                    Icon={IconCircleRight}
                />
            </div>

            <!-- Paso 2 -->
            <div class="steps__item">
                <h3 class="steps__title" aria-label="Paso 2: Crear un modelo">
                    <span>Crear un modelo</span>
                </h3>
                <p
                    class="steps__description"
                    aria-label="Crear un modelo vacío"
                ></p>

                <p>
                    Los nombres de las clases son los nombres de las tablas, si
                    su tabla se llama <code>products</code>, su clase deberá
                    llamarse <code>Products</code>
                    extendiendo la clase <code>Model</code>.
                </p>

                <p>
                    Para más información sobre la creación del modelo, consulte <Link
                        className="link link--model"
                        href="https://github.com/dlunire/dlcore/blob/master/docs/tutorial/03-modelos-orm.md"
                    >
                        {#snippet content()}
                            <span>Modelos ORM</span>
                        {/snippet}
                    </Link>
                </p>

                <Code
                    code={model.trim()}
                    title="DLUnire • /app/Models/Products.php"
                    Icon={IconPHP}
                />
            </div>

            <!-- Paso 3 (Corregido) -->
            <div class="steps__item">
                <h3
                    class="steps__title"
                    aria-label="Paso 3: Utilizar el modelo"
                >
                    <span>Utilizar el modelo en el controlador</span>
                </h3>
                <p
                    class="steps__description"
                    aria-label="Utilizar el modelo en el controlador"
                >
                    En el controlador <code>ProductsController</code>,
                    utilizamos el modelo <code>Products</code> para obtener los productos
                    paginados.
                </p>

                <Code
                    code={ProductsController.trim()}
                    title="DLUnire • /app/Controllers/ProductsController.php"
                    Icon={IconPHP}
                />
            </div>

            <!-- Paso 4 (Corregido) -->
            <div class="steps__item">
                <h3
                    class="steps__title"
                    aria-label="Paso 4: Resultados de la consulta"
                >
                    <span>Resultados de la consulta</span>
                </h3>
                <p
                    class="steps__description"
                    aria-label="Resultados de la consulta"
                >
                    Resultados de la consulta obtenidos del modelo <code>Products</code>, formateados automáticamente como respuesta JSON con sus metadatos de paginación.
                </p>

                <Code
                    code={outputJSON.trim()}
                    title="DLUnire • GET /api/products"
                    Icon={IconCircleRight}
                />
            </div>
        </div>
    </div>
</section>
