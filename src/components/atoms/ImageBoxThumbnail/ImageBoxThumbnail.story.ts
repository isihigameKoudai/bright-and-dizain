import { action } from '@storybook/addon-actions';

import ImageBoxThumbnail from './ImageBoxThumbnail.vue'
import image from '@/static/img/TitleWebDevelop.jpg';

export default {
  components: { ImageBoxThumbnail },
  title: 'atoms/ImageBoxThumbnail',
  template: '<ImageBoxThumbnail />'
}

export const withImage = (args, { argTypes }) => ({
  components: { ImageBoxThumbnail },
  props: Object.keys(argTypes),
  methods: {
    onClick: action('click')
  },
  template: `<ImageBoxThumbnail :path="path" @click="onClick" />`
});

withImage.args = {
  path: image
}
