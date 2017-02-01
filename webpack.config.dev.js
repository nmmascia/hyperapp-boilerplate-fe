const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const precss = require('precss');

const src = path.join(__dirname, 'src');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('development'),
        },
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: src,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path][name]___[hash:base64:5]!postcss-loader!',
      },
      {
        test: /\.(jpg|png|mp3|wav|ogg)$/,
        loader: 'url-loader',
        include: src,
      },
      {
        test: /\.json$/,
        loader: 'json5-loader',
        include: src,
      },
    ],
    postcss: () => {
      return [
        autoprefixer,
        precss,
      ];
    },
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    root: src,
  },
};
