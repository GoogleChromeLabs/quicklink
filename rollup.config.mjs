import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const terserOptions = {
  compress: {
    passes: 2,
  },
  mangle: true,
  format: {comments: false},
};

const createLegacyPlugins = ({withReact = false} = {}) => {
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {esmodules: false},
        modules: false,
        loose: true,
        bugfixes: true,
        // Ensure legacy bundles are fully downleveled to ES5 (microbundle-like).
        forceAllTransforms: true,
      },
    ],
  ];

  if (withReact) {
    presets.push([
      '@babel/preset-react',
      {
        runtime: 'classic',
      },
    ]);
  }

  return [
    nodeResolve({browser: true, preferBuiltins: false}),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.mjs', '.jsx'],
      presets,
    }),
    commonjs(),
    terser(terserOptions),
  ];
};

const legacyPlugins = createLegacyPlugins();
const reactLegacyPlugins = createLegacyPlugins({withReact: true});

const modernPlugins = [
  nodeResolve({browser: true, preferBuiltins: false}),
  commonjs(),
  terser(terserOptions),
];

const coreModernConfig = {
  input: 'src/index.mjs',
  plugins: modernPlugins,
  treeshake: true,
  output: [
    {
      file: 'dist/quicklink.modern.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
};

const coreLegacyConfig = {
  input: 'src/index.mjs',
  plugins: legacyPlugins,
  treeshake: true,
  output: [
    {
      file: 'dist/quicklink.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/quicklink.mjs',
      format: 'esm',
      sourcemap: true,
    },
    {
      name: 'quicklink',
      file: 'dist/quicklink.umd.js',
      format: 'umd',
      exports: 'named',
      sourcemap: true,
    },
  ],
};

const reactLegacyConfig = {
  input: 'src/chunks.mjs',
  plugins: legacyPlugins,
  treeshake: true,
  output: [
    {
      file: 'dist/react/quicklink.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/react/quicklink.mjs',
      format: 'esm',
      sourcemap: true,
    },
    {
      name: 'quicklink',
      file: 'dist/react/quicklink.umd.js',
      format: 'umd',
      exports: 'named',
      sourcemap: true,
    },
  ],
};

const reactModernConfig = {
  input: 'src/chunks.mjs',
  plugins: modernPlugins,
  treeshake: true,
  output: [
    {
      file: 'dist/react/quicklink.modern.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
};

const reactHocConfig = {
  input: 'src/react-chunks.js',
  external: ['react', 'react-dom', 'route-manifest', './quicklink.js'],
  plugins: reactLegacyPlugins,
  treeshake: true,
  output: [
    {
      file: 'dist/react/hoc.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
};

export default commandLineArgs => {
  const bundle = commandLineArgs.bundle || process.env.BUNDLE;

  if (bundle === 'core') return [coreLegacyConfig, coreModernConfig];
  if (bundle === 'react') return [reactLegacyConfig, reactModernConfig];
  if (bundle === 'react-hoc') return [reactHocConfig];

  return [coreLegacyConfig, coreModernConfig, reactLegacyConfig, reactModernConfig, reactHocConfig];
};
