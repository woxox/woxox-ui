import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const isWatchMode = process.env.ROLLUP_WATCH;
const extensions = ['.ts', '.tsx', '.js', '.jsx'];

const plugins = (destPath) => [
  typescript({
    compilerOptions: {
      declaration: false,
      declarationDir: `${destPath}/types`,
    },
  }),
  commonjs(),
  resolve({ extensions }),
  peerDepsExternal(),
  vanillaExtractPlugin(),
  alias({
    entries: [{ find: '@/*', replacement: './src/*' }],
  }),
  json(),
  !isWatchMode && terser(),
];

const config = [
  {
    input: 'src/index.tsx',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: plugins('dist/cjs'),
  },
  {
    input: 'src/index.tsx',
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
        // preserveModules: true,
        // preserveModulesRoot: 'src',
      },
    ],
    plugins: plugins('dist/esm'),
  },
];

export default config;
