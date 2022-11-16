const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      moment: "dayjs",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/style.css" }],
    }),
    // new AntdDayjsWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
  },
  devtool: "eval-source-map",
};
