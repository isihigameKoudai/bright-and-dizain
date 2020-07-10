import { storiesOf } from '@storybook/vue'
import { withKnobs, number, text } from '@storybook/addon-knobs/vue';

import LabelNormal from './LabelNormal.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('LabelNormal', () => ({
  components: { LabelNormal },
  props: {
    fontSize: {
      default: number('fontSize', 16)
    },
    title: {
      default: text('title', 'ラベル')
    }
  },
  template: `<LabelNormal :font-size="LabelNormal">{{ title }}</LabelNormal>`
}))
