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
          :placeHolder="item.placeHolder"
          :isInvalid="item.isInvalid"
          @text="item.inputValue"
        />
        <text-area
          v-else
          :placeHolder='item.placeHolder'
          @text="item.inputValue"
        />
      </p>
      <Button class="mt70">Send</Button>
    </section>
    <section class="position-title">
      <div class="logo-wrapper mt70">
				<logo-media 
					v-for="( social, i ) in socials" 
					:key="i"
					:path="social.imagePath"
					:link="social.link"
				/>
      </div>
      <label-nomal class="mt40">SNSのDM（ダイレクトメッセージ）<br class="pc-dn" />からもご連絡可能です。</label-nomal>
    </section>
  </default-view>
</template>

<script>
import DefaultView from '@components/templates/DefaultView';

import TextBox from '@components/atoms/TextBox';
import TextArea from '@components/atoms/TextArea';
import Button from '@components/atoms/Button';
import LabelNomal from '@components/atoms/LabelNomal';
import LogoMedia from '@components/atoms/LogoMedia';


export default {
  name: 'contact',
	data() {
		return {
			socials: [{
				imagePath: '/svg/LogoFacebook.svg',
				link: 'https://www.facebook.com/koudai.ishigame'
			},{
				imagePath: '/img/LogoTwitter.png',
				link: 'https://twitter.com/TVK382'
			},{
				imagePath: '/img/LogoInstagram.png',
				link: 'https://www.instagram.com/koudai_ishigame/?hl=ja'
      }],
      textInputs: {
        company: {
          value: "",
          placeHolder: "Company",
          isInvalid: false,
          inputValue: (e) => {
            this.textInputs.company.value = e;
            this.textInputs.company.validate(this.textInputs.company.value);
          },
          validate: (e) => {
            const err = e.length < 4;
			      this.textInputs.company.isInvalid = err;
          }
        },
        name: {
          value: "",
          placeHolder: "Name",
          isInvalid: false,
          inputValue: (e) => {
            this.textInputs.name.value = e;
            this.textInputs.name.validate(this.textInputs.name.value);
          },
          validate: (e) => {
            const err = e.length < 4;
			      this.textInputs.name.isInvalid = err;
          }
        },
        email: {
          value: "",
          placeHolder: "E-mail(example@email.com)",
          isInvalid: false,
          inputValue: (e) => {
            this.textInputs.email.value = e;
            this.textInputs.email.validate(this.textInputs.company.value);
          },
          validate: (e) => {
            const regex = new RegExp(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/);
            // const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
            // console.log(regex.test(e));
            // console.log(regexp.test(e));
			      this.textInputs.email.isInvalid = !regex.test(e);
          }
        },
        number: {
          value: "",
          placeHolder: "Number",
          isInvalid: false,
          inputValue: (e) => {
            this.textInputs.number.value = e;
            this.textInputs.number.validate(this.textInputs.number.value);
          },
          validate: (e) => {
            const err = e.length < 8;
			      this.textInputs.number.isInvalid = err;
          }
        },
        message: {
          value: "",
          placeHolder: "Message",
          isInvalid: false,
          inputValue: (e) => {
            this.textInputs.number.value = e;
          }
        }
      }
		}
	},
  components: {
    DefaultView,
    TextBox,
    TextArea,
    Button,
    LogoMedia,
    LabelNomal
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
