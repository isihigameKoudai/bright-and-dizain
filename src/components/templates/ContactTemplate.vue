<template>
  <TheDefaultView title="Contact">
    <section class="position-title mt100">
      <BaseTextBox
        place-holder="Company"
        :is-invalid="isErrCompany"
        :value="company"
        class="wrap-text-box"
        @text="(e) => onSetTextBy('company', e)"
      />
      <BaseTextBox
        place-holder="Name"
        :is-invalid="isErrName"
        :value="name"
        class="wrap-text-box"
        @text="(e) => onSetTextBy('name', e)"
      />
      <BaseTextBox
        place-holder="E-mail(example@email.com)"
        :is-invalid="isErrEmail"
        :value="email"
        class="wrap-text-box"
        @text="(e) => onSetTextBy('email', e)"
      />
      <BaseTextBox
        place-holder="Tel"
        :is-invalid="isErrTel"
        :value="tel"
        class="wrap-text-box"
        @text="(e) => onSetTextBy('tel', e)"
      />
      <BaseTextArea
        place-holder="Message"
        :is-invalid="isErrMessage"
        :value="message"
        class="wrap-text-box"
        @text="(e) => onSetTextBy('message', e)"
      />
      <BaseButton
        class="mt70"
        title="Send"
        :is-disable="isInvalid"
        @click="onSubmit"
      />
      <LabelNormal v-if="state.isFaildConnection" class="mt20">
        送信失敗しました、時間を空けてお試しください。
      </LabelNormal>
    </section>
    <section class="position-title">
      <div class="logo-wrapper mt70">
        <LogoMedia
          v-for="(social, i) in socials"
          :key="i"
          :path="social.imagePath"
          :link="social.link"
        />
      </div>
      <LabelNormal class="mt40">
        SNSのDM（ダイレクトメッセージ）<br class="pc-dn" />
        からもご連絡可能です。
      </LabelNormal>
    </section>
  </TheDefaultView>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  SetupContext,
} from '@nuxtjs/composition-api'

import BaseButton from '@components/atoms/BaseButton'
import TheDefaultView from '@components/templates/TheDefaultView'
import BaseTextBox from '@components/atoms/BaseTextBox'
import BaseTextArea from '@components/atoms/BaseTextArea'
import LabelNormal from '@components/atoms/LabelNormal'
import LogoMedia from '@components/atoms/LogoMedia'
import { log } from 'console'

type State = {
  isFaildConnection: boolean
}

type ContactKey = 'company' | 'name' | 'email' | 'tel' | 'message'

type ContactFormProp = {
  company: string
  name: string
  tel: string
  email: string
  message: string
  isErrCompany: boolean
  isErrName: boolean
  isErrTel: boolean
  isErrEmail: boolean
  isErrMessage: boolean
  isInvalid: boolean
}

type Props = {
  form: ContactFormProp
}

const socials = [
  {
    imagePath: '/svg/LogoFacebook.svg',
    link: 'https://www.facebook.com/koudai.ishigame',
  },
  {
    imagePath: '/img/LogoTwitter.png',
    link: 'https://twitter.com/TVK382',
  },
  {
    imagePath: '/img/LogoInstagram.png',
    link: 'https://www.instagram.com/koudai_ishigame/?hl=ja',
  },
]

export default defineComponent({
  name: 'ContactTemplate',
  components: {
    BaseButton,
    TheDefaultView,
    BaseTextBox,
    BaseTextArea,
    LabelNormal,
    LogoMedia,
  },
  props: {
    form: {
      type: Object,
      default: (): ContactFormProp => ({
        company: '',
        name: '',
        tel: '',
        email: '',
        message: '',
        isErrCompany: false,
        isErrName: false,
        isErrTel: false,
        isErrEmail: false,
        isErrMessage: false,
        isInvalid: false,
      }),
    },
  },
  setup(props: Props, { emit }: SetupContext) {
    const state = reactive<State>({
      isFaildConnection: false,
    })

    const company = computed(() => props.form.company)
    const name = computed(() => props.form.name)
    const email = computed(() => props.form.email)
    const tel = computed(() => props.form.tel)
    const message = computed(() => props.form.message)
    const isErrCompany = computed(() => props.form.isErrCompany)
    const isErrName = computed(() => props.form.isErrName)
    const isErrEmail = computed(() => props.form.isErrEmail)
    const isErrTel = computed(() => props.form.isErrTel)
    const isErrMessage = computed(() => props.form.isErrMessage)
    const isInvalid = computed(() => props.form.isInvalid)

    return {
      company,
      name,
      email,
      tel,
      message,
      isErrCompany,
      isErrName,
      isErrEmail,
      isErrTel,
      isErrMessage,
      isInvalid,
      state,
      socials,
      onSetTextBy: (key: ContactKey, text: string) => {
        console.log(key, text)
        emit(`set-${key}`, text)
      },
      onSubmit: () => {
        emit('submit')
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/page.scss';

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
