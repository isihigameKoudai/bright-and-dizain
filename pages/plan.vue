<template>
  <default-view title="Plan">
    <section class="position-title mt100">
      <label-nomal
        :font-size="24"
        class="position-title appear-up"
      >
        各種料金
      </label-nomal>
      <div class="table-container">
        <ul>
          <li class="col">
            aaaa
          </li>
          <li class="col">
            bbbb
          </li>
        </ul>
      </div>
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
      <label-nomal class="mt40">
        SNSのDM（ダイレクトメッセージ）
        <br class="pc-dn">からもご連絡可能です。
      </label-nomal>
    </section>
  </default-view>
</template>

<script>
import { mapActions } from 'vuex'
import DefaultView from '@components/templates/DefaultView'
import LabelNomal from '@components/atoms/LabelNomal'
import LogoMedia from '@components/atoms/LogoMedia'

import axios from 'axios'
import requestApi from '~/assets/datas/request'

export default {
  name: 'Contact',
  components: {
    DefaultView,
    LogoMedia,
    LabelNomal
  },
  data() {
    return {
      isFalse: false,
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
    async pushSubmit(e) {
      const API_URL = requestApi.slack.url
      const header = requestApi.slack.header

      const message = 'hello bnd'
      const data = { text: message }
      const options = {
        method: 'post',
        baseURL: API_URL,
        header,
        data: `payload={
          "channel": "#order-message",
          "username": "bnd",
          "text": "<!here> ${this.contactData}"
        }`
      }
      const res = await axios(options)
        .then(e => {
          this.isFalse = false
          this.resetContactData()
          this.toggleModal('contact')
        })
        .catch(e => {
          this.isFalse = true
        })
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

<style lang="scss" scoped>
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

.table-container {
  width: 768px;
  margin: 0 auto;
  & > ul {
    display: table;

    .col {
      display: table-cell;
      border-collapse: collapse;
      list-style: none;
      padding: 10px;
      border: solid 1px #402c2c;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>
