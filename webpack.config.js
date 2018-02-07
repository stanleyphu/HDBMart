var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'script-loader!jquery/dist/jquery.min.js',
    // 'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  // externals: {
  //   jquery: 'jQuery'
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     '$': 'jquery',
  //     'jQuery': 'jquery'
  //   })
  // ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app/components'),
      path.resolve(__dirname, 'app/api')
    ],
    alias: {
      // Main: 'app/components/Main.jsx',
      // ProductTable: 'app/components/ProductTable.jsx',
      // ShoppingCart: 'app/components/ShoppingCart.jsx',
      // InventoryAPI: 'app/api/InventoryAPI.jsx',
      applicationStyles: path.resolve(__dirname, 'app/styles/app.css')
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
