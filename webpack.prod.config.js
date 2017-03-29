const webpack = require('webpack');
const config = require('./webpack.config.js');
const path = require('path');

const OptimizeJsPlugin = require('optimize-js-plugin');


config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    cacheFolder: path.resolve('public/cached_uglify'), // TODO: not creating cache
    minimize: true,
    sourceMap: false,
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  })
);

config.plugins.push(
  new OptimizeJsPlugin({
    sourceMap: false,
  })
);

module.exports = config;
