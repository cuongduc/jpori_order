/**
 * ./webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');


module.exports = {
    context: __dirname,
    entry: './frontend/javascript/index.js',
    output: {
        path: path.resolve('./jpori_order/static/bundles/'),
        filename: "[name]-[hash].js"
    },
    plugins: [
      new BundleTracker({filename: "./webpack-stats.json"})
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
