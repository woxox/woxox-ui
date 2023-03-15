import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import { terser } from "rollup-plugin-terser";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { minify } from "rollup-plugin-swc3";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const plugins = [
    babel({
        extensions,
        babelHelpers: "bundled",
        include: ["src/**/*"],
        exclude: "node_modules/**",
    }),
    commonjs(),
    resolve({ extensions }),
    peerDepsExternal(),
    json(),
    minify({ sourceMap: true })
    // terser(),
]

export default [
    {
        input: "src/index.tsx",
        output: [
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins,
    }, {
        input: "src/index.tsx",
        output: [
            {
                dir: "dist/esm",
                format: "esm",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: "src",
            },
        ],
        plugins,
    },
];
