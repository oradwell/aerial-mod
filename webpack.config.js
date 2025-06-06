const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.(sa|s?c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  output: {
    path: __dirname + "/dist"
  }
};
