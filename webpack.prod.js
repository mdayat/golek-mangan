/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = {
  mode: "production",
  devtool: "source-map",

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "src/utils/serviceWorker/index.js"),
      swDest: "./serviceWorker.js",
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
