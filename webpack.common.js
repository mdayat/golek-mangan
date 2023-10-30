const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    main: path.resolve(__dirname, "src/main.js"),
    serviceWorker: path.resolve(__dirname, "src/utils/serviceWorker/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};

module.exports = config;
