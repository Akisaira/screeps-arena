import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

/** @type {import('rollup').RollupOptions} */
export default {
  external: [
    'game',
    'game/prototypes',
    'game/constants',
    'game/utils',
    'game/path-finder',
    'arena',
    'game/visual'
  ],
  input: {
    'capture-the-flag': 'src/capture-the-flag/main.ts'
  },
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name]/main.mjs'
  },
  plugins: [
    resolve({ rootDir: 'src' }),
    commonjs(),
    typescript({ tsconfig: 'tsconfig.json' })
  ]
}
