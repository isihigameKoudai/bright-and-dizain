import { action } from '@storybook/addon-actions';

import BaseTextBox from './BaseTextBox.vue'

export default {
  components: { BaseTextBox },
  title: 'atoms/BaseTextBox',
  template: '<BaseTextBox />'
}

const Template = (args, { argTypes }) => ({
  components: { BaseTextBox },
  props: Object.keys(argTypes),
  methods: {
    onInput: action('input')
  },
  template: '<BaseTextBox :place-holder="placeHolder" :is-invalid="isInvalid" :value="value" @text="onInput" />',
})

export const withPlaceHolder = Template.bind({})
withPlaceHolder.args =  {
  placeHolder: '入力してください!'
}

export const isInvalid = Template.bind({})
isInvalid.args = {
  placeHolder: '入力してください!',
  isInvalid: true
}

export const hasValue = Template.bind({})
hasValue.args = {
  placeHolder: '入力してください!',
  isInvalid: false,
  value: 'value!!!'
}

