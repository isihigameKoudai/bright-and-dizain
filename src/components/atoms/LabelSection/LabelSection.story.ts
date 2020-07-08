import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import LabelSection from './LabelSection.vue'

storiesOf('atoms', module).addDecorator(withKnobs).add('LabelSection', () => ({
  components: { LabelSection },
  props: {
    text: {
      default: text('title', 'テキスト')
    }
  },
  template: `<LabelSection>{{ text }}</LabelSection>`
}))
