import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';

import BaseTextBox from './BaseTextBox.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('BaseTextBox', () => ({
  components: { BaseTextBox },
  props: {
    placeHolder: {
      default: text('placeHolder', 'placeholder')
    },
    isInvalid: {
      default: boolean('isInvalid', false)
    },
    value: {
      default: text('value', '')
    }
  },
  methods: {
    onInput: action('text', text)
  },
  template: `<BaseTextBox :place-holder="placeHolder" :is-invalid="isInvalid" :value="value" @text="onInput" />`
}))
