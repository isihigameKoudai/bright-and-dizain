import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  modal: {
    mode: false,
    modalType: ''
  },
  imagePath: ''
});

export const mutations = {
  updateModal(state,payload) {
    state.modal.modalType = "";
    if (!state.modal.mode) { state.modal.modalType = payload; }
    state.modal.mode = !state.modal.mode;
  },
  updateImagePath(state,payload) {
    state.imagePath = payload;
  }
};

export const actions = {
  toggleModal({commit},payload) {
    commit('updateModal',payload);
  }
};
