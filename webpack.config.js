const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
  entry: {
  'index' :                 './src/index.js',
  'assets/js/banner':     './src/assets/js/banner.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/i,
        exclude: /images/,
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

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

    ],
  },

  plugins: [

    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html',
        chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/button.html',
      template:'./src/components/button.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/textfield.html',
      template:'./src/components/textfield.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/card.html',
      template:'./src/components/card.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/banner.html',
      template:'./src/components/banner.html',
      chunks:['index', 'assets/js/banner'],
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
        filename:'assets/css/style.css',
    }),

    new CssMinimizerPlugin(),
],

};