const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: "./src/js/entry.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist")
  },
  watch: true,
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      Domains: path.resolve(__dirname, "src/js/Domains/"),
      Factories: path.resolve(__dirname, "src/js/Factories/"),
      App: path.resolve(__dirname, "src/js/App/"),
      Templates: path.resolve(__dirname, "src/templates/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(njk|nunjucks)$/,
        loader: "nunjucks-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {minimize: true}
          }
        ]
      }
    ],
  },
  plugins: [
    new LiveReloadPlugin({
      "appendScriptTag": true
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: "./public"
  }
};