import { configure } from '@storybook/vue';

const req = require.context("../src/components/", true, /\.story\.(tsx|ts)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
