const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'js'),
          path.resolve(__dirname, 'jsx'),
          path.resolve('node_modules/preact-compat/src'),
        ],
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false, // Please don't inline the image
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
