import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist',
    clean: true,
    dts: true,
    sourcemap: true,
    target: 'es2019',
    minify: false,
    splitting: false,
    treeshake: true
});