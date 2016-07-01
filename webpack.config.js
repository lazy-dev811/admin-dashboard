var webpack = require('webpack');
var path = require('path');
// var css = require('!style!css!sass!./file.scss');

var APP_DIR = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var config = {
  entry: [
    APP_DIR + '/index.jsx'
  ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  sassLoader: {
    includePaths: APP_DIR,
  },

  plugins: []
}

module.exports = config;
