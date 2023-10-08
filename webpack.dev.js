import path from "path";
import { fileURLToPath } from "url";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

export default merge(common, config);
