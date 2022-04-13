const path = require('path');

module.exports = {
  mode: 'developer',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
    ]
  }
};