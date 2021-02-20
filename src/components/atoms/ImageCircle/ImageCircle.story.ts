import { action } from '@storybook/addon-actions';

import ImageCircle from './ImageCircle.vue'
import image from '@/assets/img/portfolio/creative/c2.jpg';

export default {
  components: { ImageCircle },
  title: 'atoms/ImageCircle',
  template: '<ImageCircle />'
}

export const withImage = (args, { argTypes }) => ({
  components: { ImageCircle },
  props: Object.keys(argTypes),
  methods: {
    onClick: action('click')
  },
  template: `<ImageCircle :path="path" @click="onClick" />`
});

withImage.args = {
  path: image
}
