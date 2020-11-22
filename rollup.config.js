import path from 'path';
import ts from 'rollup-plugin-typescript2';
import {nodeResolve} from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: {
      format: 'cjs', //commonjs 规范  umd  esm
      file: path.resolve(`dist/bundle.js`),
    },
  plugins: [
    ts({
      tsconfig: path.resolve(`tsconfig.json`)  
    }),
    nodeResolve({
      extensions: ['.js', '.ts']
    })
  ]
}