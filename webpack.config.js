const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
      rules: [
          {
              test:/\.css$/,
              use: [
                'css-loader',
                'style-loader'
              ]
          },
          {
              test:/\.(png|jpg)$/,
              use: {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]?[hash]',
                      publicPath: './dist/',
                      limit: 200000
                  }
              }
          }
      ]
  }
}
