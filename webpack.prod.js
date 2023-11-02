/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const commonConfig = require("./webpack.common");

const config = {
  mode: "production",
  devtool: "source-map",
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [["mozjpeg", { quality: 55, progressive: true }]],
          },
        },
      }),
    ],
  },
};

module.exports = merge(commonConfig, config);
