import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";

esbuild
    .build({
        entryPoints: ["src/index.ts"],
        mainFields: ["svelte", "browser", "module", "main"],
        bundle: true,
        outdir: "./dist",
        format: "esm",
        plugins: [
            esbuildSvelte({
                compilerOptions: { css: true },
                preprocess: sveltePreprocess(),
            }),
        ],
    })
    .catch(() => process.exit(1));
