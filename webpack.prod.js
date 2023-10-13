// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
  mode: 'production',
  devtool: 'source-map',
};

module.exports = merge(commonConfig, config);
