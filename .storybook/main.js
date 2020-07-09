const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
  ],
  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // const tsLoader = {
    //   loader: 'ts-loader',
    //   options: {
    //     appendTsSuffixTo: [/\.vue$/],
    //     context: __dirname,
    //     configFile: 'tsconfig.json'
    //   }
    // }

    // for (let rule of config.module.rules) {
    //   if (rule.loader === 'vue-loader') {
    //     rule.options.loaders = {
    //       ...rule.options.loaders,
    //       ts: tsLoader
    //     }
    //   }
    // }

    return config;
  },
};
