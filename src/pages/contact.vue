<template>
  <ContactTemplate
    :form="contactForm"
    @set-company="setCompany"
    @set-name="setName"
    @set-email="setEmail"
    @set-tel="setTel"
    @set-message="setMessage"
    @submit="onSubmitContact"
  />
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import ContactTemplate from '@components/templates/ContactTemplate.vue'

export default Vue.extend({
  name: 'Contact',
  components: {
    ContactTemplate,
  },
  computed: {
    ...mapGetters('contact', [
      'company',
      'name',
      'tel',
      'email',
      'message',
      'isErrCompany',
      'isErrName',
      'isErrTel',
      'isErrEmail',
      'isErrMessage',
    ]),
    isInvalid() {
      const isErrCompany = this.isErrCompany
      const isErrName = this.isErrName
      const isErrTel = this.isErrTel
      const isErrEmail = this.isErrEmail
      const isErrMessage = this.isErrMessage

      return isErrCompany || isErrName || isErrTel || isErrEmail || isErrMessage
    },
    contactForm() {
      const form = {
        company: this.company,
        name: this.name,
        tel: this.tel,
        email: this.email,
        message: this.message,
        isErrCompany: this.isErrCompany,
        isErrName: this.isErrName,
        isErrTel: this.isErrTel,
        isErrEmail: this.isErrEmail,
        isErrMessage: this.isErrMessage,
        isInvalid: this.isInvalid,
      }

      return form
    },
  },
  methods: {
    ...mapActions({
      updateModal: 'view/updateModal',
    }),
    ...mapActions({
      setCompany: 'contact/setCompany',
      setName: 'contact/setName',
      setTel: 'contact/setTel',
      setEmail: 'contact/setEmail',
      setMessage: 'contact/setMessage',
      sendContacts: 'contact/sendContacts',
      resetContacts: 'contact/resetContacts',
    }),
    async onSubmitContact() {
      try {
        await this.sendContacts()
        this.isFaildConnection = false
        this.resetContacts()
        this.updateModal('contact')
      } catch (e) {
        this.isFaildConnection = true
      }
    },
  },
})
</script>
