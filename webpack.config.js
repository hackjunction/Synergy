// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", __dirname + "/src/app/index.js"],
  output: {
    path: __dirname + "/public/js",
    publicPath: "js/",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot-loader", "babel-loader"],
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: /flexboxgrid/,
        exclude: /\.c\.scss$/,
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: /flexboxgrid/,
        exclude: /\.c\.scss$/,
      },
      {
        test: /\.c\.scss$/,
        loaders: [
          "style-loader?singleton",
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  devServer: {
    contentBase: __dirname + "/public",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BROWSER": JSON.stringify(true),
    }),
    new CleanWebpackPlugin(["css/main.css", "js/bundle.js"], {
      root: __dirname + "/public",
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
};
