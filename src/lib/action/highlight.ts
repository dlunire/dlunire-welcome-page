import hljs from "highlight.js";

export function dedent(code: string): string {
    const lines = code.replace(/^\n/, '').replace(/\n\s*$/, '').split('\n');

    // Encuentra la indentación mínima entre las líneas no vacías
    const minIndent = lines
        .filter(line => line.trim().length > 0)
        .reduce((min, line) => {
            const indent = line.match(/^ */)?.[0].length ?? 0;
            return Math.min(min, indent);
        }, Infinity);

    return lines
        .map(line => line.slice(minIndent))
        .join('\n');
}

export function highlight(node: HTMLElement) {
    const raw = node.textContent ?? '';
    node.textContent = dedent(raw);
    hljs.highlightElement(node);

    return {
        update() {
            const raw = node.textContent ?? '';
            node.textContent = raw.trim();
            hljs.highlightElement(node);
        }
    };
}
