const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');

const config = {
    entry: {
        index: [path.join(__dirname, '/src/index.js')],
    },
    // output config
    output: {
        path: buildPath, // Path of output file
        filename: 'react-magic.min.js', // Name of output file
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ],
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
            sourceMap: true
        }),
        // Allows error warnings but does not stop compiling.
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};

module.exports = config;
