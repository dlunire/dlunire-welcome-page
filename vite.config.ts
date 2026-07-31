import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            $lib: path.resolve(__dirname, "./src/lib"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                // Genera el archivo principal de entrada sin hash (ej. index.js)
                entryFileNames: "assets/[name].js",

                // Genera los fragmentos de código separados sin hash
                chunkFileNames: "assets/[name].js",

                // Genera los estilos y otros recursos sin hash (ej. index.css, logo.svg)
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
});
