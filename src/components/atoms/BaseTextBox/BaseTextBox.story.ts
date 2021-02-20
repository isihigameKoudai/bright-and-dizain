import { action } from '@storybook/addon-actions';

import BaseTextBox from './BaseTextBox.vue'

export default {
  components: { BaseTextBox },
  title: 'atoms/BaseTextBox',
  template: '<BaseTextBox />'
}

export const withPlaceHolder = (args, { argTypes }) => ({
  components: { BaseTextBox },
  props: Object.keys(argTypes),
  methods: {
    onInput: action('input')
  },
  template: '<BaseTextBox :place-holder="placeHolder" :is-invalid="isInvalid" :value="value" @text="onInput" />',
})

withPlaceHolder.args =  {
  placeHolder: '入力してください!'
}

export const isInvalid = () => ({
  components: { BaseTextBox },
  template: `<BaseTextBox place-holder="placeHolder" :is-invalid="true" value="" />`
})

export const hasValue = () => ({
  components: { BaseTextBox },
  template: `<BaseTextBox place-holder="placeHolder" :is-invalid="false" value="value" />`
})

