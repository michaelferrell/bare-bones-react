const webpack = require("webpack")
const path = require("path")

const config = {
  entry: "./dev-server/entry.js",
  output: {
    path: path.resolve(__dirname, "dev-server"),
    filename: "main.js"
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
    contentBase: path.resolve(__dirname, "dev-server")
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config
