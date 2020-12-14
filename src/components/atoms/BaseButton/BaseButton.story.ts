import { action } from '@storybook/addon-actions';

import BaseButton from './BaseButton.vue'

export default {
  components: { BaseButton },
  title: 'atoms/BaseButton',
  template: '<BaseButton />'
}

export const withTitle = (args, { argTypes }) => ({
  components: { BaseButton },
  template: '<BaseButton :title="title" :is-disable="isDisabled" @click="onClick" />',
  props: Object.keys(argTypes),
  methods: {
    onClick: action('click')
  }
});

withTitle.args = {
  title: 'タイトル',
  isDisabled: false
}
