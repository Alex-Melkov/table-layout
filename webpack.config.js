const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => {
          return path.relative(path.dirname(resourcePath), context) + '/';
        },
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `css/${filename('css')}`,
    }),
  ];
  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@/index.tsx'],
  },
  output: {
    filename: `js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    open: true,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
