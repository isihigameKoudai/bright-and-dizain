import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue';

import ImageCircle from './ImageCircle.vue'
import image from '@/assets/img/portfolio/creative/c2.jpg';

storiesOf('atoms', module).addDecorator(withKnobs).add('ImageCircle', () => ({
  components: { ImageCircle },
  props: {
    path: {
      default: image
    }
  },
  template: `<ImageCircle :path="path" @click="onClick" />`
}))
