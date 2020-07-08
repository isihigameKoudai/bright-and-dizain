import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import BaseTextArea from './BaseTextArea.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('BaseTextArea', () => ({
  components: { BaseTextArea },
  props: {
    placeHolder: {
      default: text('placeHolder', 'placeholder')
    }
  },
  methods: {
    onClick: action('text', text)
  },
  template: `<BaseTextArea :place-holder="placeHolder" @text="onClick" />`
}))
