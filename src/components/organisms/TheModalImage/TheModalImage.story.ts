import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';
import Vue from 'vue';
import Vuex from 'vuex';

import TheModalImage from './TheModalImage.vue'
import image from '@/assets/img/portfolio/portrait/p2.jpg'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    view: {
      namespaced: true,
      state: {
        imagePath: image
      },
      getters: {
        imagePath: state => state.imagePath
      }
    }
  }
});

storiesOf('organisms', module).addDecorator(withKnobs).add('TheModalImage', () => ({
  components: { TheModalImage },
  store,
  template: `<TheModalImage />`
}))
