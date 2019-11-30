export interface S {
  modal: {
    mode: boolean
    modalType: string
  }
  imagePath: string
}

export interface G {
  modalMode: boolean
  modalType: string
  imagePath: string
}

export interface RG {
  'view/modalMode': G['modalMode']
  'view/modalType': G['modalType']
  'view/imagePath': G['imagePath']
}

export interface M {
  SET_MODAL_MODE: void
  SET_MODAL_TYPE: string
  SET_IMAGE_PATH: string
}

export interface RM {
  'view/SET_MODAL_MODE': M['SET_MODAL_MODE']
  'view/SET_MODAL_TYPE': M['SET_MODAL_TYPE']
  'view/SET_IMAGE_PATH': M['SET_IMAGE_PATH']
}

export interface A {
  updateModal: string
  setImagePath: string
  toggleModal: void
}

export interface RA {
  'view/updateModal': A['updateModal']
  'view/setImagePath': A['setImagePath']
  'view/toggleModal': A['toggleModal']
}
