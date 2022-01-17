const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
  entry: {
  'index' :                 './src/index.js',
  'assets/js/banner':     './src/assets/js/banner.js',
  'assets/js/tabs':     './src/assets/js/tabs.js',
  'assets/js/upload':     './src/assets/js/upload.js',
  'assets/js/chart':     './src/assets/js/chart.js'
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

      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        exclude: /fonts/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath:"assets/images",
        },
      },

    ],
  },

  plugins: [

    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html',
        chunks:['index','assets/js/chart','assets/js/banner','assets/js/tabs'],
    }),

    
    new HtmlWebpackPlugin({
      filename:'add-product.html',
      template:'./src/add-product.html',
      chunks:['index','assets/js/upload'],
    }),

    new HtmlWebpackPlugin({
      filename:'products.html',
      template:'./src/products.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'users.html',
      template:'./src/users.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'orders.html',
      template:'./src/orders.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'add-user.html',
      template:'./src/add-user.html',
      chunks:['index','assets/js/upload'],
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

    new HtmlWebpackPlugin({
      filename:'components/list.html',
      template:'./src/components/list.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/tabs.html',
      template:'./src/components/tabs.html',
      chunks:['index','assets/js/tabs'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/upload.html',
      template:'./src/components/upload.html',
      chunks:['index','assets/js/upload'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/help.html',
      template:'./src/components/help.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/summary.html',
      template:'./src/components/summary.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/actions.html',
      template:'./src/components/actions.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/sidebar.html',
      template:'./src/components/sidebar.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/table.html',
      template:'./src/components/table.html',
      chunks:['index'],
    }),

    new HtmlWebpackPlugin({
      filename:'components/chart.html',
      template:'./src/components/chart.html',
      chunks:['index','assets/js/chart'],
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
        filename:'assets/css/style.css',
    }),

    new CssMinimizerPlugin(),

    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/components/help.html'),
      location:'help',
      template_filename: ['index.html','add-product.html','products.html','users.html','orders.html','add-user.html'],
    }),

    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/components/sidebar.html'),
      location:'sidebar',
      template_filename: ['index.html','add-product.html','products.html','users.html','orders.html','add-user.html'],
    }),

    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/components/actions.html'),
      location:'actions',
      template__filename: ['index.html'],
    }),

    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/components/banner.html'),
      location:'banner',
      template__filename: ['index.html'],
    }),

    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/components/chart.html'),
      location:'chart',
      template__filename: ['index.html'],
    }),

    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/components/tabs.html'),
      location:'tabs',
      template__filename: ['index.html'],
    }),
],


};