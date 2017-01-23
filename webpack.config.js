'use strict';
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main/spa/app/main.ts',
        polyfills: './src/main/spa/app/polyfills.ts',
        vendor: './src/main/spa/app/vendor.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        //TODO: workaround for https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname, // location of your src
            {}
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/main/spa/index.html'
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};