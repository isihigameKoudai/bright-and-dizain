import { storiesOf } from '@storybook/vue'

import BaseButton from './BaseButton.vue'

storiesOf('BaseButton', module).add('simple', () => ({
  components: { BaseButton },
  template: `<BaseButton title="Button" />`
}))
