import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

export const state = (): S => ({
  modal: {
    mode: false,
    modalType: ''
  },
  imagePath: ''
})

export const getters: Getters<S, G> = {
  modalMode: state => state.modal.mode,
  modalType: state => state.modal.modalType,
  imagePath: state => state.imagePath
}

export const mutations: Mutations<S, M> = {
  SET_MODAL_MODE(state) {
    state.modal.mode = !state.modal.mode
  },
  SET_MODAL_TYPE(state, payload = '') {
    state.modal.modalType = payload
  },
  SET_IMAGE_PATH(state, payload) {
    state.imagePath = payload
  }
}

export const actions: Actions<S, A, G, M> = {
  updateModal({ state, commit }, payload) {
    commit('SET_MODAL_TYPE')
    if (!state.modal.mode) {
      commit('SET_MODAL_TYPE', payload)
    }
    commit('SET_MODAL_MODE')
  },
  setImagePath({ commit }, payload) {
    commit('SET_IMAGE_PATH', payload)
  },
  async toggleModal({ commit }) {
    commit('SET_MODAL_MODE')
    await new Promise(resolve => setTimeout(() => resolve(0), 200));
    commit('SET_MODAL_TYPE')
  }
}
