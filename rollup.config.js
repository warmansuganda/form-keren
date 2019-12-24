import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(['uuid']),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
        namedExports: {
            'node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer'],
            'node_modules/draft-js/lib/Draft.js': ['EditorState', 'convertFromRaw', 'convertToRaw', 'ContentState'],
            'node_modules/lodash/lodash.js': ['filter', 'map'],
            'node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js': ['Editor'],
            // 'node_modules/react-dnd/dist/esm/index.js': ['DragDropContext'],
        }
    })
  ]
}
