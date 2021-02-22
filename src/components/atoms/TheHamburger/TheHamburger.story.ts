import { action } from '@storybook/addon-actions'

import TheHamburger from './TheHamburger.vue'

export default {
  components: { TheHamburger },
  title: 'atoms/TheHamburger',
  template: '<TheHamburger />'
}

const Template = (args, { argTypes }) => ({
  components: { TheHamburger },
  props: Object.keys(argTypes),
  methods: {
    onToggle: action('click')
  },
  template: `<TheHamburger :isActive="isOpen" @click="onToggle" />`
});

export const defaultState = Template.bind({})
defaultState.args = {
  isOpen: false
}

export const isOpen = Template.bind({})
isOpen.args = {
  isOpen: true
}

