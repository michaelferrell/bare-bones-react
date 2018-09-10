const webpack = require("webpack")
const path = require("path")

const config = {
  entry: path.join(__dirname, "..", "demo", "entry.js"),
  output: {
    path: path.join(__dirname, "..", "demo"),
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
