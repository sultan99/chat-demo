const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin
const CopyPlugin = require(`copy-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const SpritePlugin = require(`svg-sprite-loader/plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: `svg-sprite-loader`,
            options: {extract: true}
          },
          `svgo-loader`,
        ]
      },
    ]
  },
  output: {
    filename: `bundle.js`,
    path: rootPath(`./public`)
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
    new SpritePlugin(),
    new HtmlWebPackPlugin({
      template: rootPath(`./src/index.html`)
    }),
    new DynamicCdnWebpackPlugin({
      env: `production`,
      resolver: cdnResolvers,
      verbose: true,
    }),
    new CopyPlugin([{
      from: rootPath(`./public`)
    }]),
    new BundleAnalyzerPlugin({
      analyzerMode: `static`,
      reportFilename: rootPath(`bundle-report.html`)
    }),
  ],
}
