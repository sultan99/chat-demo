const CopyPlugin = require(`copy-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.svg$/,
        loader: `svg-sprite-loader`
      },
    ]
  },
  resolve: {
    alias: {
      common: rootPath(`./src/common`),
      components: rootPath(`./src/components`),
      containers: rootPath(`./src/containers`),
      locales: rootPath(`./src/locales`),
      store: rootPath(`./src/store`),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: rootPath(`./src/index.html`)
    }),
    new CopyPlugin([{
      from: rootPath(`./public`)
    }]),
  ],
  devServer: {
    historyApiFallback: true
  },
  output: {
    filename: `bundle.js`,
    path: rootPath(`./public`)
  },
}
