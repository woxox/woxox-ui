import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { swc } from 'rollup-plugin-swc3';


const isWatchMode = process.env.ROLLUP_WATCH;
const extensions = [".ts", ".tsx", ".js", ".jsx"];

const plugins = [
    swc({
        extensions,
        include: ["src/**/*"],
        exclude: "node_modules/**",
        tsconfig: './tsconfig.json',
        sourceMaps: true
    }),
    // babel({
    //     extensions,
    //     babelHelpers: "bundled",
    //     include: ["src/**/*"],
    //     exclude: "node_modules/**",
    // }),
    commonjs(),
    resolve({ extensions }),
    peerDepsExternal(),
    json(),
    !isWatchMode && terser(),
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
        external: ['react']
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
        external: ['react']
    },
];
