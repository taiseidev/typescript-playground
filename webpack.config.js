const path = require("path");

module.exports = {
  // webpackでファイルを一つにまとめる際に起点となるファイル
  entry: {
    bundle: "./src/index.ts",
  },
  // バンドルしたファイルをどこに出力するか
  // __dirnameはプロジェクトディレクトリのpathを取得
  // distとjoinしてdistディレクトリ下にwebpackでバンドルしたファイルを出力
  output: {
    path: path.join(__dirname, "dist"),
    // bundle:に紐づいたファイルを名を出力
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  // ローカルのwebサーバーが参照するディレクトリ先
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    // trueにするとwebサーバーを立ち上げた時に自動的にブラウザを開いてくれる
    open: true,
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
      },
    ],
  },
};
