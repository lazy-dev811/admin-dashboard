import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'null-loader',
        ],
      },
    ],
  },
};
