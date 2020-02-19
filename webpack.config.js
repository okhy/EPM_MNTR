const path = require("path")

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.tsx")
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  mode: "none",
  target: "web",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: path.resolve(__dirname, "./"),
    filename: "bundle.js",
    pathinfo: true
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"]
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: path.resolve(__dirname, "/node_modules"),
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: true,
              sourceMap: true,
              localIdentName: "[local]--[hash:base64:10]",
              // camelCase: true,
              importLoaders: 1
              // exportOnlyLocals: true
            }
          },
          { loader: "typed-css-modules-loader" }
        ]
      }
    ]
  }
}
