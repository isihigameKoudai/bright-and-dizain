import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue';

import ImageTitle from './ImageTitle.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('ImageTitle', () => ({
  components: { ImageTitle },
  props: {
    isDark: {
      default: boolean('isDrak', false)
    }
  },
  template: `<ImageTitle :is-dark="isDark" />`
}))
