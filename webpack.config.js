const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const optimization = () => {
  const config = {};

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash:8].min.${ext}`;

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            stage: 3,
          }),
        ],
      },
    },
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  context: PATHS.src,
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: PATHS.dist,
  },
  resolve: {
    alias: {
      '@': PATHS.src,
      '@core': `${PATHS.src}/core`,
    },
  },
  devServer: {
    port: 3000,
    hot: isDev,
    watchContentBase: true,
  },
  optimization: optimization(),
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd,
        removeRedundantAttributes: isProd,
        useShortDoctype: isProd,
        removeEmptyAttributes: isProd,
        removeStyleLinkTypeAttributes: isProd,
        keepClosingSlash: isProd,
        minifyJS: isProd,
        minifyCSS: isProd,
        minifyURLs: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/favicon.ico`,
          to: PATHS.dist,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
    ],
  },
};
