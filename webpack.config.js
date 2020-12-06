const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /reboot\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "dts-css-modules-loader",
            options: {
              namedExport: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                mode: "local",
                localIdentName: "[folder]__[local]__[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /reboot\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.((otf|ttf|woff|woff2)$)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./[path]/[name].[ext]",
            },
          },
        ],
      },
      // images
      {
        test: /\.((svg|png|jpg|jpeg|webp)$)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./[path]/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      meta: {
        title: `TODO Application`,
      },
      template: path.join(__dirname, "public/index.ejs"),
      favicon: path.join(__dirname, "public/favicon.ico"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    open: true,
    compress: true,
    host: "0.0.0.0",
    port: 9000,
  },
};
