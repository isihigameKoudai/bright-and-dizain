const path = require('path');
const srcDir = '../src/'

module.exports = {
  // stories: ['../src/components/**/*.story.(tsx|ts)'],
  stories: ['../src/components/atoms/BaseButton/BaseButton.story.ts'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-knobs/vue',
    '@storybook/addon-notes/register',
  ],
  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }]
    })

    config.resolve.extensions = ['.ts', '.js', '.vue', '.json'];
    config.resolve.alias = {
      ...config.resolve.alias,
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, srcDir, '/'),
      'utils': path.join( srcDir + 'utils'),
      'service': path.join( srcDir + 'service')
    };
    config.resolve.modules.push(path.resolve(__dirname, srcDir))

    return config;
  },
};
