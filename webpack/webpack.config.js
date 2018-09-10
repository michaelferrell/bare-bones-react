const webpack = require("webpack")
const path = require("path")

const config = {
  entry: path.join(__dirname, "..", "src"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "main.js",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
}

module.exports = config
