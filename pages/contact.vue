<template>
  <default-view title="Contact">
    <section class="position-title mt100">
      <p
        v-for="(item, index) in textInputs"
        :key="index"
        class="mt30"
      >
        <text-box
          v-if="index !== 'message'"
          :place-holder="item.placeHolder"
          :is-invalid="item.isInvalid"
          @text="item.inputValue"
        />
        <text-area
          v-else
          :place-holder="item.placeHolder"
          :is-invalid="item.isInvalid"
          @text="item.inputValue"
        />
      </p>
      <BaseButton
        :is-disable="invalid"
        class="mt70"
        @click="pushSubmit"
      >
        Send
      </BaseButton>
      <label-nomal
        v-if="isFaildConnection"
        class="mt20"
      >
        送信失敗しました、時間を空けてお試しください。
      </label-nomal>
    </section>
    <section class="position-title">
      <div class="logo-wrapper mt70">
        <logo-media
          v-for="(social, i) in socials"
          :key="i"
          :path="social.imagePath"
          :link="social.link"
        />
      </div>
      <label-nomal
        class="mt40"
      >
        SNSのDM（ダイレクトメッセージ）<br
          class="pc-dn"
        >
        からもご連絡可能です。
      </label-nomal>
    </section>
  </default-view>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@components/atoms/BaseButton'
import DefaultView from '@components/templates/DefaultView'
import TextBox from '@components/atoms/TextBox'
import TextArea from '@components/atoms/TextArea'
import LabelNomal from '@components/atoms/LabelNomal'
import LogoMedia from '@components/atoms/LogoMedia'

import axios from 'axios'
import submitContact from '~/service/Contact'

export default {
  name: 'Contact',
  components: {
    BaseButton,
    DefaultView,
    TextBox,
    TextArea,
    LogoMedia,
    LabelNomal
  },
  data() {
    return {
      isFaildConnection: false,
      socials: [
        {
          imagePath: '/svg/LogoFacebook.svg',
          link: 'https://www.facebook.com/koudai.ishigame'
        },
        {
          imagePath: '/img/LogoTwitter.png',
          link: 'https://twitter.com/TVK382'
        },
        {
          imagePath: '/img/LogoInstagram.png',
          link: 'https://www.instagram.com/koudai_ishigame/?hl=ja'
        }
      ],
      textInputs: {
        company: {
          value: '',
          placeHolder: 'Company',
          isInvalid: false,
          inputValue: e => {
            this.textInputs.company.value = e
            this.textInputs.company.validate(this.textInputs.company.value)
          },
          validate: e => {
            const err = e.length < 4
            this.textInputs.company.isInvalid = err
          }
        },
        name: {
          value: '',
          placeHolder: 'Name',
          isInvalid: false,
          inputValue: e => {
            this.textInputs.name.value = e
            this.textInputs.name.validate(this.textInputs.name.value)
          },
          validate: e => {
            const err = e.length < 4
            this.textInputs.name.isInvalid = err
          }
        },
        email: {
          value: '',
          placeHolder: 'E-mail(example@email.com)',
          isInvalid: false,
          inputValue: e => {
            this.textInputs.email.value = e
            this.textInputs.email.validate(this.textInputs.email.value)
          },
          validate: e => {
            const regex = new RegExp(
              /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
            )
            this.textInputs.email.isInvalid = !regex.test(e)
          }
        },
        number: {
          value: '',
          placeHolder: 'Number',
          isInvalid: false,
          inputValue: e => {
            this.textInputs.number.value = e
            this.textInputs.number.validate(this.textInputs.number.value)
          },
          validate: e => {
            const err = e.length < 8 || isNaN(Number(e))
            this.textInputs.number.isInvalid = err
          }
        },
        message: {
          value: '',
          placeHolder: 'Message',
          isInvalid: false,
          inputValue: e => {
            this.textInputs.message.value = e
            this.textInputs.message.validate(this.textInputs.message.value)
          },
          validate: e => {
            const err = e.length < 10
            this.textInputs.message.isInvalid = err
          }
        }
      }
    }
  },
  computed: {
    contactData() {
      const company = this.textInputs.company.value
      const name = this.textInputs.name.value
      const email = this.textInputs.email.value
      const number = this.textInputs.number.value
      const message = this.textInputs.message.value
      const contacts = `会社・組織：${company}\n名前：${name}\nEメール：${email}\n電話番号：${number}\nメッセージ：${message}\n`
      return contacts
    },
    invalid() {
      const company = this.textInputs.company.isInvalid
      const name = this.textInputs.name.isInvalid
      const email = this.textInputs.email.isInvalid
      const number = this.textInputs.number.isInvalid
      const message = this.textInputs.message.isInvalid
      const invalid = company || name || email || number || message
      return invalid
    }
  },
  mounted() {
    this.textInputs.message.isInvalid = true
  },
  methods: {
    ...mapActions(['toggleModal']),
    async pushSubmit() {
      const res = await submitContact( this.contactData ).catch( e => {
        this.isFaildConnection = true
      })
      this.isFaildConnection = false
      this.resetContactData()
      this.toggleModal('contact')
    },
    resetContactData() {
      this.textInputs.company.value = ''
      this.textInputs.name.value = ''
      this.textInputs.email.value = ''
      this.textInputs.number.value = ''
      this.textInputs.message.value = ''
    }
  }
}
</script>

<style lang="scss">
.logo-wrapper {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
}
</style>
