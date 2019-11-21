<template>
  <the-default-view title="Contact">
    <section class="position-title mt100">
      <BaseTextBox
        place-holder="Company"
        :is-invalid="isErrCompany"
        :value="company"
        class="wrap-text-box"
        @text="setCompany"
      />
      <BaseTextBox
        place-holder="Name"
        :is-invalid="isErrName"
        :value="name"
        class="wrap-text-box"
        @text="setName"
      />
      <BaseTextBox
        place-holder="E-mail(example@email.com)"
        :is-invalid="isErrEmail"
        :value="email"
        class="wrap-text-box"
        @text="setEmail"
      />
      <BaseTextBox
        place-holder="Tel"
        :is-invalid="isErrTel"
        :value="tel"
        class="wrap-text-box"
        @text="setTel"
      />
      <BaseTextArea
        place-holder="Message"
        :is-invalid="isErrMessage"
        :value="message"
        class="wrap-text-box"
        @text="setMessage"
      />
      <BaseButton
        class="mt70"
        :is-disable="isInvalid"
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
  </the-default-view>
</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex'

import BaseButton from '@components/atoms/BaseButton'
import TheDefaultView from '@components/templates/TheDefaultView'
import BaseTextBox from '@components/atoms/BaseTextBox'
import BaseTextArea from '@components/atoms/BaseTextArea'
import LabelNomal from '@components/atoms/LabelNomal'
import LogoMedia from '@components/atoms/LogoMedia'

export default {
  name: 'Contact',
  components: {
    BaseButton,
    TheDefaultView,
    BaseTextBox,
    BaseTextArea,
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
      ]
    }
  },
  computed: {
    ...mapState('contact', ['company', 'name', 'tel', 'email', 'message']),
    ...mapGetters('contact', ['isErrCompany', 'isErrName', 'isErrTel', 'isErrEmail', 'isErrMessage']),
    isInvalid() {
      const isErrCompany = this.isErrCompany;
      const isErrName = this.isErrName;
      const isErrTel = this.isErrTel;
      const isErrEmail = this.isErrEmail;
      const isErrMessage = this.isErrMessage;

      return isErrCompany || isErrName || isErrTel || isErrEmail || isErrMessage;
    }
  },
  methods: {
    ...mapActions({
      updateModal: 'view/updateModal'
    }),
    ...mapActions({
      setCompany: 'contact/setCompany',
      setName: 'contact/setName',
      setTel: 'contact/setTel',
      setEmail: 'contact/setEmail',
      setMessage: 'contact/setMessage',
      sendContacts: 'contact/sendContacts',
      resetContacts: 'contact/resetContacts'
    }),
    async pushSubmit() {
      const { data } = await this.sendContacts().catch( () => {
        this.isFaildConnection = true;
      });

      this.isFaildConnection = false;
      this.resetContacts();
      this.updateModal('contact');
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

.wrap-text-box {
  display: block;
  margin: 30px auto 0;
}

</style>
