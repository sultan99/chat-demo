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
      'components': rootPath(`./src/components`),
      'containers': rootPath(`./src/containers`),
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
