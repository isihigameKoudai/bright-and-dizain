import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import LogoMedia from './LogoMedia.vue'
import logo from '@/static/svg/LogoFacebook.svg'

export default {
  components: { LogoMedia },
  title: 'atoms/LogoMedia',
  template: '<LogoMedia />'
}

export const defaultState = (args, { argTypes }) => ({
  components: { LogoMedia },
  props: Object.keys(argTypes),
  template: `<LogoMedia :path="path" />`
});

defaultState.args = {
  path: logo,
}
