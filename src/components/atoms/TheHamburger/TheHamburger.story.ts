import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/vue';

import TheHamburger from './TheHamburger.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('TheHamburger', () => ({
  components: { TheHamburger },
  data: () => ({
    isOpen: false
  }),
  methods: {
    onToggle() {
      action('click')
      this.isOpen = !this.isOpen;
    }
  },
  template: `<TheHamburger :isActive="isOpen" @click="onToggle" />`
}))
