import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
// const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
//   compress: {
//     warnings: false,
//   },
//   output: {
//     comments: false,
//   },
// });
const APP_DIR = path.resolve(__dirname, 'src/client/app');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: `${APP_DIR}/index.html`,
  filename: 'index.html',
  inject: 'body'
});

export default {
  entry: `${APP_DIR}/app.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    hotUpdateChunkFilename: "[id].hot-update.js",
    hotUpdateMainFilename: "hot-update.json"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.svg$/,
        loaders: ['file']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    //uglifyPlugin,
    htmlWebpackPlugin,
  ]
};
