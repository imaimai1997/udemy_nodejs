const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bandle.js",
  },
  devServer: {
    port: 9000,
    open: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
