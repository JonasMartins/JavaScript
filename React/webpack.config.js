var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/home/jonas/Documentos/JavaScript/React/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["latest", "stage-0", "react"]
        }
      }
    ]
  }
}