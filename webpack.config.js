const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath:"/",
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    writeToDisk:true,
    open:true
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.(sass|css|scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:"assets/fonts",
            },
          },
        ],
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html',
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
        filename:'assets/css/style.css',
    }),

    new CssMinimizerPlugin(),
],

};