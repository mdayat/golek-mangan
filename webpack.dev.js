const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    static: path.resolve(__dirname, "dist"),
  },
};

module.exports = merge(commonConfig, config);
