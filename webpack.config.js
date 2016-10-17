const webpack = require('webpack');
const path = require('path');


const APP_DIR = path.resolve(__dirname, 'src/client/app');
const SCSS_DIR = path.resolve(__dirname, 'src/client/app');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');


const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    `${APP_DIR}/index.jsx`,
  ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './src/client',
    hot: true,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: '/node_modules/',
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          // 'file?name=[nature-1 sha512&digest=hex&name=[nature-1].[jpg]',
          'file?name=nature-1.jpg',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },

  sassLoader: {
    includePaths: SCSS_DIR,
  },

  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './'
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

module.exports = config;
