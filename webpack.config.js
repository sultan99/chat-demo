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
      store: rootPath(`./src/store`),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: rootPath(`./src/index.html`)
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
