import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';

import ImageBox from './ImageBox.vue'
import image from '../../../static/img/TitleWebDevelop.jpg';

storiesOf('atoms', module).addDecorator(withKnobs).add('ImageBox', () => ({
  components: { ImageBox },
  props: {
    path: {
      default: image
    },
    shadow: {
      default: boolean('shadow', false)
    },
    isSmall: {
      default: boolean('isSmall', false)
    }
  },
  methods: {
    onInput: action('text', text)
  },
  template: `<ImageBox :path="path" :shadow="shadow" :is-small="isSmall" />`
}))
