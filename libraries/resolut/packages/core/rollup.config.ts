import { RollupWatchOptions } from 'rollup';

import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import generatePackageJSON from 'rollup-plugin-generate-package-json';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' assert { type: 'json' };

const config: Array<RollupWatchOptions> = [
    {
        input: './.build/src/index.js',
        plugins: [
            del({ targets: 'dist/*' }),
            copy({
                targets: [
                    { src: 'README.md', dest: 'dist' },
                    { src: 'LICENSE', dest: 'dist' },
                ],
            }),
            generatePackageJSON({
                baseContents: packageJSON => ({ ...packageJSON }),
            }),
            terser(),
        ],
        output: [
            { file: pkg.exports.import, format: 'es' },
            { file: pkg.exports.require, format: 'commonjs', exports: 'named' },
        ],
    },
    {
        input: './.build/src/index.d.ts',
        output: [{ file: pkg.exports.types, format: 'es' }],
        plugins: [dts()],
    },
];

export default config;
