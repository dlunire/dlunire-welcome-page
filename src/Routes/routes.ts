import * as engine from "@dlunire/front-dlroute";
import NotFound from "../layouts/Components/NotFounds/NotFound.svelte";
import Welcome from "../layouts/Sections/Welcome.svelte";
import License from "../layouts/Components/Legal/License.svelte";
import Privacy from "../layouts/Components/Legal/Privacy.svelte";
import Cookie from "../layouts/Components/Legal/Cookie.svelte";

export type Dispatch = engine.Dispatch;

/**
 * Registra las rutas de la aplicación.
 *
 * @returns { void }
 */
function registerRoute(): void {
    engine.route("/", Welcome);
    engine.route("/terms", License);
    engine.route('/privacy', Privacy);
    engine.route('/cookies', Cookie);
}

/**
 * Registra las rutas y resuelve la ruta actual.
 *
 * @returns El resultado del despacho, con `component` ya normalizado
 * a `NotFound` cuando no hubo coincidencia.
 *
 * @returns { Dispatch }
 */
export function init(): Dispatch {
    registerRoute();
    const dispatch: Dispatch = engine.dispatch();

    if (!dispatch.validated.validated) {
        dispatch.component = NotFound;
    }

    return dispatch;
}
