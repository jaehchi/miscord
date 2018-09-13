require('dotenv').config();
const webpack = require('webpack');
const { resolve } = require('path');

const envVariables = new webpack.DefinePlugin({
  'process.env': {
    'CLIENT_ENV': JSON.stringify(process.env.CLIENT_ENV),
  }
});

module.exports = {
  entry: [ 'babel-polyfill', resolve('./src/index') ],
  output: {
    path: resolve('./public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ]
        }
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    envVariables
  ]
};