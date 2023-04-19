import { Configuration } from 'webpack';

import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// const SRC_DIR = resolve(__dirname, '../src');
// const DIST_DIR = resolve(__dirname, '../dist');

const config: Configuration = {
    entry: resolve(__dirname, '../src/index.ts'),
    devtool: 'inline-source-map',
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    externals: {
        react: 'react',
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //             },
            //         },
            //     ],
            //     include: /\.module\.css$/i,
            // },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.tsx?$/, use: ['babel-loader', 'ts-loader'], exclude: /node_modules/ },
        ],
    },
    output: {
        filename: 'index.js',
        path: resolve(__dirname, '../dist'),
        clean: true,
        library: { name: 'library-template', type: 'umd' },
        libraryTarget: 'umd',
    },
};

export default config;
