import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/example/index.js',
  format: 'iife',
  moduleName: 'app',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    uglify(),
  ],
  dest: './docs/bundle.js',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-motion': 'ReactMotion'
  },
}
