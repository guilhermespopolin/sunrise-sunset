const paths = require('../paths')

const loadJS = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: paths.nodeModules,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
              configFile: paths.eslintCfg,
            },
          },
        ],
      },
    ],
  },
})

const loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
})

const loadAsset = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name][hash:8].[ext]',
        },
      },
    ],
  },
})

module.exports = {
  loadJS,
  loadCSS,
  loadAsset,
}
