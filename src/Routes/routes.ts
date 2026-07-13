import * as engine from "@dlunire/front-dlroute";
import NotFound from "../layouts/Components/NotFounds/NotFound.svelte";
import Content from "../layouts/Sections/Content.svelte";

export type Dispatch = engine.Dispatch;

/**
 * Registra las rutas de la aplicación.
 */
function registerRoute(): void {
    engine.route("/", Content);
}

/**
 * Registra las rutas y resuelve la ruta actual.
 *
 * @returns El resultado del despacho, con `component` ya normalizado
 * a `NotFound` cuando no hubo coincidencia.
 */
export function init(): Dispatch {
    registerRoute();
    const dispatch: Dispatch = engine.dispatch();

    if (!dispatch.validated.validated) {
        dispatch.component = NotFound;
    }

    return dispatch;
}