'use strict';
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        cesium: './src/main/spa/app/viewer-cesium/cesium.ts',
        main: './src/main/spa/app/main.ts',
        polyfills: './src/main/spa/app/polyfills.ts',
        vendor: './src/main/spa/app/vendor.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src', 'main', 'spa'),
                loader: ['awesome-typescript-loader', 'angular2-template-loader'],
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src', 'main', 'spa'),
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                // component styling
                // https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-include-SCSS-in-components
                test: /\.css|\.scss$/,
                include: path.resolve(__dirname, 'src', 'main', 'spa', 'app'),
                loader: ['raw-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                // application styling
                test: /\.css|\.scss$/,
                include: path.resolve(__dirname, 'src', 'main', 'spa'),
                exclude: path.resolve(__dirname, 'src', 'main', 'spa', 'app'),
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
                })
            },
            {
                // cesium styling
                test: /\.css$/,
                include: path.resolve(__dirname, 'node_modules', 'cesium'),
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader?sourceMap'],
                })
            }
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
            name: ['main', 'vendor', 'cesium', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/main/spa/index.html'
        }),
        new ExtractTextPlugin({
            filename: "[name].css"
        }),
        new CopyWebpackPlugin([
            {
                 from: path.resolve(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium'),
                 to: 'cesium'
            }
        ])
    ],
    resolve: {
        alias: {
            cesium: path.resolve(__dirname, 'node_modules', 'cesium', 'Build', 'CesiumUnminified')
        },
        extensions: [".tsx", ".ts", ".js"],
    },
};