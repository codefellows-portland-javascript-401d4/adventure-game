const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './src/app.js',
    output: {
        path: './build',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new ExtractTextPlugin("style.css")
    ],

    module: {
        preloaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    }

};