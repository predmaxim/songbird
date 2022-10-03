const path = require('path');
const PugPlugin = require('pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: false,
    hot: true,
    port: 8080,
    compress: true,
    // static: './src/favicon.ico',
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true
      }
    },
  },
  optimization: {
    minimize: false,
  },
  stats: 'errors-only'
}

module.exports = ({ dev }) => ({
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'inline-source-map' : 'nosources-source-map',
  entry: {
    index: './src/index.pug',
    donate: './src/donate.pug'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash:8].js', // output filename of JS files
    clean: true
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      Styles: '/src/scss/',
      Img: '/src/assets/img/',
      Blocks: '/src/blocks/',
      Buttons: '/src/blocks/buttons/',
      Forms: '/src/blocks/forms/',
      Footer: '/src/blocks/footer/',
      Header: '/src/blocks/header/',
      Sliders: '/src/blocks/sliders/',
      Popups: '/src/blocks/popups/',
      Menu: '/src/blocks/menu/',
      Js: '/src/js/',
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(?:woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/inline',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      },
      {
        test: /\.s[ac]ss$/i,

        use: ['css-loader', {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            sassOptions: {
              outputStyle: "compressed",
            },
          },
        },
        ]
      },
    ]
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: 'assets/css/[name].[contenthash:8].css'
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        // relative path is from src
        { from: './src/favicon.ico' }, // <- your path to favicon
      ]
    })
  ],
  ...devServer(dev),
});