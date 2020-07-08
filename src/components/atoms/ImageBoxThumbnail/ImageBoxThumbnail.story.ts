import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue';

import ImageBoxThumbnail from './ImageBoxThumbnail.vue'
import image from '../../../static/img/TitleWebDevelop.jpg';

storiesOf('atoms', module).addDecorator(withKnobs).add('ImageBoxThumbnail', () => ({
  components: { ImageBoxThumbnail },
  props: {
    path: {
      default: image
    }
  },
  methods: {
    onClick: action('click')
  },
  template: `<ImageBoxThumbnail :path="path" @click="onClick" />`
}))
