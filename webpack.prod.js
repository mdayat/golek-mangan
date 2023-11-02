/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const commonConfig = require("./webpack.common");

const config = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },

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
