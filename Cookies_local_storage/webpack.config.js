const path = require('path');

    module.exports = {
        entry: './src/index.js', // Entry point of your application
        output: {
          filename: 'bundle.js', // Output bundle file name
          path: path.resolve(__dirname, 'dist'), // Output directory
        },

  devServer: {
    static: path.resolve(__dirname, 'public'), // Specify the static directory
    compress: true,
    port: 8080,
  },
};
