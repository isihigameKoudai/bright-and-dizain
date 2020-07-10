import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import LogoMedia from './LogoMedia.vue'
import logo from '@/static/svg/LogoFacebook.svg'

storiesOf('atoms', module).addDecorator(withKnobs).add('LogoMedia', () => ({
  components: { LogoMedia },
  props: {
    path: {
      default: logo
    }
  },
  template: `<LogoMedia :path="path">{{ text }}</LogoMedia>`
}))
