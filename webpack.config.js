const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { template } = require('@babel/core')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BattleShip',
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      },
    ]
  }
}
