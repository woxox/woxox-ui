import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { swc } from 'rollup-plugin-swc3';
import { visualizer } from 'rollup-plugin-visualizer'



const isWatchMode = process.env.ROLLUP_WATCH;
const extensions = ['.ts', '.tsx', '.js', '.jsx'];

const plugins = [
  peerDepsExternal(),
  resolve({ extensions }),
  swc({
    extensions,
    include: ["src/**/*"],
    exclude: "node_modules/**",
    tsconfig: './tsconfig.json',
    sourceMaps: true
  }),
  commonjs({ extensions }),
  vanillaExtractPlugin(),
  !isWatchMode && terser(),
  !isWatchMode && visualizer(),
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
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
  },
];

export default config;
