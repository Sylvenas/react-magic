const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
    entry: path.join(__dirname, '/index.js'),
    output: {
        path: buildPath,
        filename: 'app.js',
    },
    devServer: {
        inline: true,
        port: 8080,
        host:'0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },
}

module.exports = config;