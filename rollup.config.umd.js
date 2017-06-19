import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/lib/index.js',
  format: 'umd',
  moduleName: 'ReactMotionScroll',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ],
  dest: './dist/react-motion-scroll.min.js',
  globals: {
    react: 'React',
    'react-motion': 'ReactMotion'
  },
  external: [
    'react',
    'react-motion'
  ]
};
