const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    options: {
      presets: [['vue', { flow: false, typescript: true }]],
    },
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader',
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx', '.vue');
  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
