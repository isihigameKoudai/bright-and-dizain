<template>
  <div class="pb100">
    <label-title class="position-title" title="Contact" />
    <section class="position-title mt100">
      <p class="mt30">
        <text-box
          placeHolder="Company"
          contentType='company'
        />
      </p>
      <p class="mt30">
        <text-box
        placeHolder="Name"
        contentType='name'
      />
      </p>
      <p class="mt30">
        <text-box
          placeHolder="E-maild(example@email.com)"
          contentType='email'
        />
      </p>
      <p class="mt30">
        <text-box
          placeHolder="Number"
          contentType='phone'
        />
      </p>
      <p class="mt30">
        <text-area
          placeHolder="Message"
        />
      </p>
      <Button class="mt70" title="Send" btnType="submit" />
    </section>
    <section class="position-title">
      <div class="logo-wrapper mt70">
        <logo-media
          path="/svg/LogoFacebook.svg"
          link="https://www.facebook.com/koudai.ishigame"
        />
        <logo-media
          path="/img/LogoTwitter.png"
          link="https://twitter.com/TVK382"
        />
        <logo-media
          path="/img/LogoInstagram.png"
          link="https://www.instagram.com/koudai_ishigame/?hl=ja"
        />
      </div>
      <p class="label-nomal mt40">SNSのDM（ダイレクトメッセージ）<br class="pc-dn" />からもご連絡可能です。</p>
    </section>
  </div>
</template>

<script>
import LabelTitle from '../components/atoms/LabelPageTop';
import TextBox from '../components/atoms/TextBox';
import TextArea from '../components/atoms/TextArea';
import Button from '../components/atoms/Button';
import LogoMedia from '../components/atoms/LogoMedia';

export default {
  data() {
    return {
      companyTxt: 'aaaaa',
      nameTxt: '',
      mailTxt: '',
      PhoneTxt: '',
      MessageTxt: ''
    }
  },
  components: {
    LabelTitle,
    TextBox,
    TextArea,
    Button,
    LogoMedia
  }
}
</script>

<style>
.logo-wrapper {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}

</style>
