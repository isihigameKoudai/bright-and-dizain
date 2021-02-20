import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue';

import TheHamburger from './TheHamburger.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('TheHamburger', () => ({
  components: { TheHamburger },
  props: {
    isOpen: {
      default: boolean('isOpen', false)
    }
  },
  methods: {
    onToggle: action('click')
  },
  template: `<TheHamburger :isActive="isOpen" @click="onToggle" />`
}))


export default {
  components: { TheHamburger },
  title: 'atoms/TheHamburger',
  template: '<TheHamburger />'
}

export const defaultState = (args, { argTypes }) => ({
  components: { TheHamburger },
  props: Object.keys(argTypes),
  methods: {
    onToggle: action('click')
  },
  template: `<TheHamburger :isActive="isOpen" @click="onToggle" />`
});


export const isOpen = (args, { argTypes }) => ({
  components: { TheHamburger },
  props: Object.keys(argTypes),
  methods: {
    onToggle: action('click')
  },
  template: `<TheHamburger :isActive="true" @click="onToggle" />`
});


