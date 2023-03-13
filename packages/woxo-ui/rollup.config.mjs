// import dts from 'rollup-plugin-dts';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import swc, { minify } from "rollup-plugin-swc3";
// import typescript from '@rollup/plugin-typescript';

const extensions = [".ts", ".tsx", ".js", ".jsx"];

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
        plugins: [
            // babel({
            //     extensions,
            //     babelHelpers: "bundled",
            //     include: ["src/**/*"],
            //     exclude: "node_modules/**",
            // }),
            swc({
                extensions,
                include: ["src/**/*"],
                exclude: "node_modules/**",
                sourceMaps: true,
            }),
            commonjs(),
            // resolve({ extensions }),
            peerDepsExternal(),
            json(),
            // minify({ sourceMap: true })
            // terser(),
            // typescript({ tsconfig: "./tsconfig.json" }),
        ],
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
        plugins: [
            // babel({
            //     extensions,
            //     babelHelpers: "bundled",
            //     include: ["src/**/*"],
            //     exclude: "node_modules/**",
            // }),
            swc({
                extensions,
                include: ["src/**/*"],
                exclude: "node_modules/**",
                sourceMaps: true,
            }),
            commonjs(),
            // resolve({ extensions }),
            peerDepsExternal(),
            json(),
            // minify({ sourceMap: true })
            // terser(),
            // typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    // {
    //     input: "dist/types/index.d.ts",
    //     output: [{ file: "dist/index.d.ts", format: "esm" }],
    //     plugins: [dts()],
    // },
];
