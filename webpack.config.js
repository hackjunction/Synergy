// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", __dirname + "/src/app/index.js"],
  output: {
    path: __dirname + "/public/js",
    publicPath: "js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot-loader", "babel-loader", "eslint-loader"],
        exclude: /node_modules/
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: __dirname + "/public"
  },
  plugins: [
    new CleanWebpackPlugin(["css/main.css", "js/bundle.js"], {
      root: __dirname + "/public",
      verbose: true,
      dry: false // true for simulation
    })
  ]
};
