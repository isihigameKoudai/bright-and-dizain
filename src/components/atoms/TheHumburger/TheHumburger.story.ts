import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/vue';

import TheHumburger from './TheHumburger.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('TheHumburger', () => ({
  components: { TheHumburger },
  data: () => ({
    isOpen: false
  }),
  methods: {
    onToggle() {
      action('click')
      this.isOpen = !this.isOpen;
    }
  },
  template: `<TheHumburger :isActive="isOpen" @click="onToggle" />`
}))
