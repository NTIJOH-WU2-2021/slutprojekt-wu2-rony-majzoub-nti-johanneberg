const ImageminPlugin = require('imagemin-webpack-plugin').default;

const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: '95-100'
        },
        plugins: [
          imageminMozjpeg({
            quality: 90,
            progressive: true
          })
        ]
      })
    ]
  }
}