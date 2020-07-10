import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue';

import ImageTitle from './ImageTitle.vue'

const decorator = () => ({
  template: `<div style="background: #eee; padding: 30px;">
    <story />
  </div>`
})

storiesOf('atoms', module).addDecorator(decorator).addDecorator(withKnobs).add('ImageTitle', () => ({
  components: { ImageTitle },
  props: {
    isDark: {
      default: boolean('isDrak', false)
    }
  },
  template: `<ImageTitle :is-dark="isDark" />`
}))
