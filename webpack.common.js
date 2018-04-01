const path = require('path');

module.exports = {
  entry: {
    app: './src/mm-layout.js',
  },
  output: {
    filename: 'mm-layout.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};
