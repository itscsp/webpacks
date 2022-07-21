const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
  entry: './src/app.js',
  output: {
      filename: 'myBundle.[hash].js',
      path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})],
  devServer: {
    port: 8080,
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test:/\.scss$/,
        use: ["style-loader","css-loader", 'sass-loader']
      }
    ]
  },
  mode: "development"
}

if(currentTask == 'build') {
  config.mode = "production"
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({filename: 'main.[hash].css'}), new CleanWebpackPlugin())
}

module.exports = config;