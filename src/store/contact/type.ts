export interface S {
  company: string
  name: string
  email: string
  tel: string
  message: string
}

export interface G {
  isErrCompany: boolean
  isErrName: boolean
  isErrEmail: boolean
  isErrTel: boolean
  isErrMessage: boolean
}

export interface RG {
  'contact/isErrCompany': G['isErrCompany']
  'contact/isErrName': G['isErrName']
  'contact/isErrEmail': G['isErrEmail']
  'contact/isEreTel': G['isErrTel']
  'contact/isErrMeassage': G['isErrMessage']
}

export interface M {
  SET_COMPANY: string
  SET_NAME: string
  SET_EMAIL: string
  SET_TEL: string
  SET_MESSAGE: string
}

export interface RM {
  'contact/SET_COMPANY': M['SET_COMPANY']
  'contact/SET_NAME': M['SET_NAME']
  'contact/SET_EMAIL': M['SET_EMAIL']
  'contact/SET_TEL': M['SET_TEL']
  'contact/SET_MESSAGE': M['SET_MESSAGE']
}

export interface A {
  setCompany: string
  setName: string
  setEmail: string
  setTel: string
  setMessage: string
  resetContacts: void
  sendContacts: void
}

export interface RA {
  'contact/setCompany': A['setCompany']
  'contact/setName': A['setName']
  'contact/setEmail': A['setEmail']
  'contact/setTel': A['setTel']
  'contact/setMessage': A['setMessage']
  'contact/resetContacts': A['resetContacts']
  'contact/sendContacts': A['sendContacts']
}
