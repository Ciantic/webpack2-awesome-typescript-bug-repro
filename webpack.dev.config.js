var path = require("path");
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');

var appDir = path.resolve(__dirname, "App");
var config = {
  entry: {
    app: [
        // We are using next two entries for hot-reload
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'App', 'Index.tsx')
    ]
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js'],
    modulesDirectories: ["node_modules", "resources"],
  },
  output: {
    filename: '[name].js',
    publicPath: "http://localhost:3333/assets/"
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['awesome-typescript-loader?tsconfig=tsconfig.json&useBabel&useCache'], include: appDir },
    ]
  },
  tslint: {
    emitErrors: true // false = WARNING for webpack, true = ERROR for webpack
  },
  devtool: 'source-map',
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
