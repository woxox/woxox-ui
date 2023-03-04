import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default [
    {
        input: "src/index.tsx",
        output: [
            {
                dir: 'dist/cjs',
                format: "cjs",
                sourcemap: true,
            },
            {
                dir: 'dist/esm',
                format: "esm",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
        ],
        plugins: [
            babel({
                extensions,
                babelHelpers: 'bundled',
                include: ['src/**/*'],
                exclude: 'node_modules/**',
            }),
            resolve({ extensions }),
            commonjs({ include: 'node_modules/**' }),
            peerDepsExternal(),
            json(),
            terser(),
            // typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    // {
    //     input: "dist/types/index.d.ts",
    //     output: [{ file: "dist/index.d.ts", format: "esm" }],
    //     plugins: [dts()],
    // },
];