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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      comments: false,
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
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
              url: false // Please don't inline the image
            }
          }
          'sass-loader',
        ],
      },
    ],
  },
}
