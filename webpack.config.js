const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

// const APP_DIR = path.resolve(__dirname, 'src/client/app');
const entryPath = './src/client/app/index.jsx';
// const SCSS_DIR = path.resolve(__dirname, 'src/client/app');
const outputPath = './src/client/public';
// const BUILD_DIR = path.resolve(__dirname, 'src/client/public');

const config = {
  entry: {
    // 'webpack-dev-server/client?http://localhost:3000',
    main: path.resolve(__dirname, entryPath),
  },

  output: {
    path: path.resolve(__dirname, outputPath),
    filename: 'bundle.js',
  },

  devServer: {
    inline: true,
    port: 7777,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?name=nature-1.jpg',
      //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      //   ],
      // },
      // {
      //   test: /\.(png|jpe?g)$/i,
      //   loaders: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       query: {
      //         progressive: true,
      //         optimizationLevel: 7,
      //         interlaced: false,
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4,
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'highlight-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'src/client/app/assets/fonts/[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },

  // sassLoader: {
  //   includePaths: SCSS_DIR,
  // },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

module.exports = config;
