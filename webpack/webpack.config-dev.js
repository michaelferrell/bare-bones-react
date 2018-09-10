const webpack = require("webpack")
const path = require("path")

const config = {
  entry: path.join(__dirname, "..", "dev-server", "entry.js"),
  output: {
    path: path.join(__dirname, "..", "dev-server"),
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
  },
  devServer: {
    port: 9000,
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, "..", "dev-server")
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config
