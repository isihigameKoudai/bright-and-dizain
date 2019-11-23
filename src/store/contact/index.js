import Model from './model'
import * as type from './type'
import {
  validCompany,
  validName,
  validEmail,
  validTel,
  validMessage
} from '~/service/validation'
import submitContact from '~/service/Contact'

export const state = () => Model

export const getters = {
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

export const mutations = {
  [type.SET_COMPANY](state, payload) {
    state.company = payload
  },
  [type.SET_NAME](state, payload) {
    state.name = payload
  },
  [type.SET_TEL](state, payload) {
    state.tel = payload
  },
  [type.SET_EMAIL](state, payload) {
    state.email = payload
  },
  [type.SET_MESSAGE](state, payload) {
    state.message = payload
  }
}

export const actions = {
  setCompany({ commit }, payload) {
    commit(type.SET_COMPANY, payload)
  },
  setName({ commit }, payload) {
    commit(type.SET_NAME, payload)
  },
  setTel({ commit }, payload) {
    commit(type.SET_TEL, payload)
  },
  setEmail({ commit }, payload) {
    commit(type.SET_EMAIL, payload)
  },
  setMessage({ commit }, payload) {
    commit(type.SET_MESSAGE, payload)
  },
  resetContacts({ commit }) {
    commit(type.SET_COMPANY, '')
    commit(type.SET_NAME, '')
    commit(type.SET_TEL, '')
    commit(type.SET_EMAIL, '')
    commit(type.SET_MESSAGE, '')
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
