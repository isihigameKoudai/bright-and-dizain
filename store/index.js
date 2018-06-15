import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  modal: false,
  contact: {
    company:'',
    name: '',
    email: '',
    phone: '',
    message: ''
  }
});

export const mutations = {
  updateModal(state,payload) {
    state.modal = !state.modal;
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
