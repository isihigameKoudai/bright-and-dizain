import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  modal: false
});

export const mutations = {
  updateModal(state,payload) {
    state.modal = !state.modal;
  }
};

export const actions = {
  toggleModal({commit},payload) {
    commit('updateModal',payload);
  }
};
