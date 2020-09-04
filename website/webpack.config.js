const webpack = require('webpack')

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        path.resolve('src', 'ts', 'script.ts'),
        path.resolve('src', 'scss', 'main.scss')
    ],
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.scss'],
        modules: [
            path.resolve(__dirname, "node_modules"),
        ],
    },
    output: {
        path: path.resolve('static', 'packaged'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ],
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
};
