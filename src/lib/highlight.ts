// src/lib/highlight.ts
import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('php', php);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('typescript', typescript);

export default hljs;
