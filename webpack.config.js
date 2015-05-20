var paths = {
    styles: '/styles',
    scriptsEntry: './app/scripts/index.js'
};
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    cache: true,
    entry: paths.scriptsEntry,
    output:{
        path: path.resolve('public/js'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader:'babel'
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.html$/,
                loader: "ng-cache"
            }
        ]
    }

};
