import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';

import svgr from '@svgr/rollup';

import react from 'react';
import reactDom from 'react-dom';
import styledComponents from 'styled-components';

import pkg from './package.json';

const config = {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs', exports: 'named', sourcemap: false },
		{ file: pkg.module, format: 'es', exports: 'named', sourcemap: false },
	],
	plugins: [
		external(),
		postcss({}),
		url({ exclude: ['**/*.svg'] }),
		svgr(),
		resolve(),
		commonjs({
			namedExports: { react: Object.keys(react), 'react-dom': Object.keys(reactDom) , 'styled-components': Object.keys(styledComponents) },
			extensions: ['.js', '.ts', '.jsx', '.tsx'],
		}),
	],
};

export default config;
