const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // module path will identificate the relative path
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // to interpretate css files we need this tow loaders
                    // ther order matters
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // extract css to a own file separated
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        // to not require import all files, use index.html from dist
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}