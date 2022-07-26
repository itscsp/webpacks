const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'myBundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
        hot:true
      },
    mode: "development"
}