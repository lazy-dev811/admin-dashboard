var webpack = require('webpack');
var path = require('path');


var APP_DIR = path.resolve(__dirname, 'src/client/app');
var SCSS_DIR = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');


var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
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
        exclude: '/node_modules/',
        loaders: ['react-hot','babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  sassLoader: {
    includePaths: SCSS_DIR,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}

module.exports = config;
