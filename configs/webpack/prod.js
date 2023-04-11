// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "index.js",
    path: resolve(__dirname, "../../dist"),
    globalObject: "this",
    publicPath: "/",
    library: {
      name: "jianxian",
      type: "umd",
    },
  },
  devtool: "source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});
