// highlight.ts
import hljs from "highlight.js";

export function dedent(code: string): string {
    const lines = code
        .replace(/^\n/, "")
        .replace(/\n\s*$/, "")
        .split("\n");

    const minIndent = lines
        .filter((line) => line.trim().length > 0)
        .reduce((min, line) => {
            const indent = line.match(/^ */)?.[0].length ?? 0;
            return Math.min(min, indent);
        }, Infinity);

    return lines.map((line) => line.slice(minIndent)).join("\n");
}

export function highlight(node: HTMLElement, code: string) {
    function render(value: string) {
        node.textContent = dedent(value);
        hljs.highlightElement(node);
    }

    render(code);

    return {
        update(newCode: string) {
            render(newCode); // ahora SÍ se ejecuta, porque `code` es el argumento reactivo
        },
    };
}
