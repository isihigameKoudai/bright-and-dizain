import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import TitleParallax from './TitleParallax.vue'

import { setParallax } from '../../../utils/parallax.ts'

const decorator = () => ({
  template: `<div style="padding-top: 300px; padding-bottom: 300px;">
    <h1 style="text-align: center;">scroll</h1>
    <story />
  </div>`
})

storiesOf('atoms', module).addDecorator(decorator).addDecorator(withKnobs).add('TitleParallax', () => ({
  components: { TitleParallax },
  props: {
    title: {
      default: text('text', 'Title')
    },
    path: {
      default: text('path', '/img/TitlePhotograph.jpg')
    }
  },
  mounted() {
    setParallax();
  },
  template: `<TitleParallax :path="path" :title="title" />`
}))
