module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: {
            loader: "css-loader"
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'file-loader',
            options: { esModule: false, },
          }
        }
      ]
    }
  }