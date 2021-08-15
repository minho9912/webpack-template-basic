//import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // parcel index.html
  //파일을 읽어들이기 시작하는 진입점 설정
  // webpack은 html이아닌 js파일을 진입점으로 사용함
  entry: "./js/main.js",

  //결과물을 반환하는 설정
  output: {
    // path의 변수에는 resolve라는 메소드 사용, 이는 1과 2인수의 경로를 합쳐준다.
    // dist라는 폴더에 결과물을 반환하겠다
    // output의 path값은 노드js의 절대경로 표시해주어야함
    path: path.resolve(__dirname, "dist"),
    // main.js라는 이름을 가진 파일을 dist폴더에 넣는다. (main.js내용으로)
    filename: "main.js",
    // clean: true는 구성이 변경되어 새로운 js파일을 dist폴더에 넣을때
    // 그 전에 생성되어있던 파일은 지우겠다는 의미이다.
    clean: true,
  },
  module: {
    rules: [
      {
        // ? 는 있을수도있고, 없을수도있다는 의미이다.
        test: /\.s?scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
