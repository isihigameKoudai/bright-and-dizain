import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';

import BaseButton from './BaseButton.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('BaseButton', () => ({
  components: { BaseButton },
  props: {
    title: {
      default: text('name', 'name')
    },
    isDisable: {
      default: boolean('isDisable', false)
    }
  },
  methods: {
    onClick: action('click')
  },
  template: `<BaseButton :title="title" :is-disable="isDisable" @click="onClick" />`
}))
