const webpack = require('webpack')

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: [
        path.resolve('src', 'js', 'script.js'),
        path.resolve('src', 'scss', 'main.scss')
    ],
    mode: 'production',
    resolve: {
        extensions: ['.js', '.scss'],
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
    minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
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
