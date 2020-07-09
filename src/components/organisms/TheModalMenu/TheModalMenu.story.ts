import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue';
import Vue from 'vue';
import Vuex from 'vuex';

import TheModalMenu from './TheModalMenu.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    view: {
      namespaced: true,
      actions: {
        toggleModal({ commit }) {
          commit('SET_MODAL_TYPE')
          commit('SET_MODAL_MODE')
        }
      }
    }
  }
});

const decorator = () => ({
  template: `<div style="padding: 20px;">
    <story />
  </div>`
})

storiesOf('organisms', module).addDecorator(decorator).addDecorator(withKnobs).add('TheModalMenu', () => ({
  components: { TheModalMenu },
  store,
  mounted() {
    store.dispatch('view/toggleModal');
  },
  template: `<TheModalMenu />`
}))
