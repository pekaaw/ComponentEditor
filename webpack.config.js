// webpack.config.js
"use strict";
let CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./app/index.js"
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist",
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'myth-webpack-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'app/**/*.html', to: 'html', flatten: true}
    ])
  ],
  resolve: {
    modules: ["node_modules", "app"]
  }
};
