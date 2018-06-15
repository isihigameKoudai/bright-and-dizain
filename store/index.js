import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  modal: {
    mode: false,
    modalType: ''
  },
  contact: {
    company:'',
    name: '',
    email: '',
    phone: '',
    message: ''
  },
  imagePath: ''
});

export const mutations = {
  updateModal(state,payload) {
    if (!state.modal.mode) {
      state.modal.modalType = payload;
    } else {
      state.modal.modalType = "";
    }
    state.modal.mode = !state.modal.mode;
  },
  updateContactCompany(state,payload) {
    state.contact.company = payload;
  },
  updateContactName(state, payload) {
    state.contact.name = payload; 
  },
  updateContactEmail(state, payload) {
    state.contact.email = payload;
  },
  updateContactPhone(state, payload) {
    state.contact.phone = payload;
  },
  updateContactMessage(state, payload) {
    state.contact.message = payload;
  },
  updateImagePath(state,payload) {
    state.imagePath = payload;
  }
};

export const actions = {
  toggleModal({commit},payload) {
    commit('updateModal',payload);
  },
  sendEmail({commit},payload) {
    // Send Succecc
    console.log(payload);
    //Send Failed
  }
};
