const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/main-app.js',
  output: {
    path: './build',
    filename: 'build.js'
  }, 

    // devtool: 'source-map',

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

  module: {
    preLoaders: [{
      test: /\.js$/, // all files ending in .js
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude:/node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'] //,
        // cacheDirectory: true,
        // plugins: ['transform-runtime']
      }, 

    }, 

    //change CSS style-loader
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  }
};