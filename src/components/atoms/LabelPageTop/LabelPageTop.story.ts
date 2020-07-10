import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import LabelPageTop from './LabelPageTop.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('LabelPageTop', () => ({
  components: { LabelPageTop },
  props: {
    title: {
      default: text('title', 'ラベル')
    }
  },
  template: `<LabelPageTop :title="title" />`
}))
