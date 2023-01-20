const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntries = require('webpack-fix-style-only-entries');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    main: './src/main.js',
    style: './src/style.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /images\/.+\.(png|jpg|jpeg|svg|webp|gif)/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new FixStyleOnlyEntries(),
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}