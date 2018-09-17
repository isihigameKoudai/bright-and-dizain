<template>
  <default-view title="Contact">
    <section class="position-title mt100">
      <p
        v-for="(item, i) in textTypes"
        :key="i"
        class="mt30"
      >
        <text-box
          v-if="item.contentType !== 'content'"
          :placeHolder="item.placeHolder"
          :contentType="item.contentType"
        />
        <text-area
          v-else
          :placeHolder='item.placeHolder'
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
      textTypes: [{
        placeHolder: 'Company',
        contentType: 'company',
        text: ''
      },{
        placeHolder: 'Name',
        contentType: 'name',
        text: ''
      },{
        placeHolder: 'E-maild(example@email.com)',
        contentType: 'email',
        text: ''
      },{
        placeHolder: 'Number',
        contentType: 'phone',
        text: ''
      },{
        placeHolder: 'Message',
        contentType: 'content',
        text: ''
      }]
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
