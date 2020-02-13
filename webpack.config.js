const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = env => {
  // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'

  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'source-map-loader']
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                config: { path: 'src/js/postcss.confвввig.js' }
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: MiniCssExtractPlugin.loader
            },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: { path: 'src/js/config/postcss.config.js' }
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'test.css'
      }),

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
      })
    ]
  };
};
