import { action } from '@storybook/addon-actions';

import BaseTextArea from './BaseTextArea.vue'

export default {
  components: { BaseTextArea },
  title: 'atoms/BaseTextArea',
  template: '<BaseTextArea />'
}

export const withPlaceHolder = (args, { argTypes }) => ({
  components: { BaseTextArea },
  template: '<BaseTextArea :place-holder="placeHolder" @text="onClick" />',
  props: Object.keys(argTypes),
  methods: {
    onClick: action('text')
  }
});

withPlaceHolder.args = {
  placeHolder: '入力してください',
}
