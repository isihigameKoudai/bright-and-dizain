// @ts-nocheck
import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

import {
  validCompany,
  validName,
  validEmail,
  validTel,
  validMessage
} from 'service/validation'
import { submitContact } from 'service/contact'

export const state = (): S => ({
  company: '',
  name: '',
  email: '',
  tel: '',
  message: ''
})

export const getters: Getters<S, G> = {
  company: state => state.company,
  name: state => state.name,
  email: state => state.email,
  tel: state => state.tel,
  message: state => state.message,
  isErrCompany({ company }) {
    return validCompany(company)
  },
  isErrName({ name }) {
    return validName(name)
  },
  isErrTel({ tel }) {
    return validTel(tel)
  },
  isErrEmail({ email }) {
    return validEmail(email)
  },
  isErrMessage({ message }) {
    return validMessage(message)
  }
}

export const mutations: Mutations<S, M> = {
  SET_COMPANY(state, payload) {
    state.company = payload
  },
  SET_NAME(state, payload) {
    state.name = payload
  },
  SET_EMAIL(state, payload) {
    state.email = payload
  },
  SET_TEL(state, payload) {
    state.tel = payload
  },
  SET_MESSAGE(state, payload) {
    state.message = payload
  }
}

export const actions: Actions<S, A, G, M> = {
  setCompany({ commit }, payload) {
    commit('SET_COMPANY', payload)
  },
  setName({ commit }, payload) {
    commit('SET_NAME', payload)
  },
  setTel({ commit }, payload) {
    commit('SET_TEL', payload)
  },
  setEmail({ commit }, payload) {
    commit('SET_EMAIL', payload)
  },
  setMessage({ commit }, payload) {
    commit('SET_MESSAGE', payload)
  },
  resetContacts({ commit }) {
    commit('SET_NAME', '')
    commit('SET_TEL', '')
    commit('SET_EMAIL', '')
    commit('SET_COMPANY', '')
    commit('SET_MESSAGE', '')
  },
  sendContacts({ state }) {
    const { company, name, email, tel, message } = state

    return submitContact({
      company,
      name,
      email,
      tel,
      message
    })
  }
}
