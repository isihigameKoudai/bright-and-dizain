import Model from './model';
import * as type from './type';

export const state = () => Model;

export const mutations = {
  [type.SET_IMAGE_PATH](state, payload) {
    state.imagePath = payload;
  },
  [type.SET_MODAL_MODE](state) {
    state.modal.mode = !state.modal.mode;
  },
  [type.SET_MODAL_TYPE](state, payload = "") {
    state.modal.modalType = payload;
  }
};

export const actions = {
  updateModal({ state, commit }, payload) {
    commit(type.SET_MODAL_TYPE);
    if (!state.modal.mode) { commit(type.SET_MODAL_TYPE, payload); }
    commit(type.SET_MODAL_MODE);
  },
  setImagePath({ commit }, payload) {
    commit(type.SET_IMAGE_PATH, payload);
  },
  toggleModal({ state, commit }) {
    if (state.modal.mode) commit(type.SET_MODAL_TYPE);
    commit(type.SET_MODAL_MODE);
  }
};
