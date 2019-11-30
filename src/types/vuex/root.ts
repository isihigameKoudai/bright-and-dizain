import 'vuex'
import * as Contact from '../../store/contact/type'
import * as View from '../../store/view/type'

declare module 'vuex' {
  type RootState = {
    contact: Contact.S
    view: View.S
  }
  type RootGetters = Contact.RG & View.RG
  type RootMutations = Contact.RM & View.RM
  type RootActions = Contact.RA & View.RM
}
