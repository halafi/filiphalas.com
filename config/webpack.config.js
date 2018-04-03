const path = require('path')

module.exports = env => ({
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/dist'),
    // publicPath: '/assets/',
  },
  devtool: env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env'],
        },
      },
    ],
  },
})
