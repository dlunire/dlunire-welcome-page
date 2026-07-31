import { tick } from "svelte";

export function tickScroll() {
    tick().then(() => {
        const hash = globalThis.location.hash;

        if (hash) {
            try {
                // Buscar el elemento con el ID correspondiente al hash
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" }); // Puedes usar 'instant' si prefieres
                }
            } catch (e) {
                // Prevenir error si el hash tiene caracteres no válidos para querySelector
                console.warn("Hash no válido para selección:", hash);
            }
        } else {
            // 3. Comportamiento vital de UX: si cambias de página y no hay hash,
            // forzar la vista al tope, ya que el navegador no lo hace por defecto.
            globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
    });
}
