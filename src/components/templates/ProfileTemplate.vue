<template>
  <TheDefaultView title="Profile">
    <section class="wrapper mt90">
      <div class="area-profile-left appear">
        <ImageCircle
          class="position-img-profile"
          path="/img/ProfileImage.jpg"
        />
        <LabelSection class="mt40"> Koudai Ishigame </LabelSection>
      </div>
      <div class="area-profile-right">
        <LabelNormal class="appear-up">
          1994年6月28日生まれ、<br class="pc-dn" />青森県出身・東京都在住。
          <br />プログラミングと音楽が好きで、 <br />学生時代にはプレーヤーと<br
            class="pc-dn"
          />SNSを統合させた音楽アプリや <br />調理工程と材料を限定した<br
            class="pc-dn"
          />簡易型料理レシピアプリをリリース。
        </LabelNormal>
        <LabelNormal class="label-nomal mt30 appear-up">
          大学時代に大手家電量販店での<br
            class="pc-dn"
          />販売員の仕事でカメラと出会う。 <br />たまたま撮った写真を機に
          <br />知人がフリーペーパーのモデルに<br
            class="pc-dn"
          />挑戦してくれたことをキッカケに、
          <br />本格的に人物・ポートレート写真を始める。
        </LabelNormal>
        <LabelNormal class="mt30 appear-up">
          現在はエンジニア兼フォトグラファー<br
            class="pc-dn"
          />として都内で活動中。
          <br />「作り込み」と呼ばれる、コンセプトに応じた<br
            class="pc-dn"
          />背景や衣装などを用いて <br />世界観を描き出す分野の写真を得意とし、
          <br />モデルの撮影だけでなく<br
            class="pc-dn"
          />音楽CDのアルバムジャケットなど
          <br />アーティスティックな撮影もこなす。
        </LabelNormal>
        <LabelNormal class="mt30 appear-up">
          その他、Webメディアへの写真提供や
          <br />海外の厳正写真審査サイトでの掲載経験もあり。
        </LabelNormal>
      </div>
    </section>
    <section class="position-title">
      <LabelSection class="appear-up"> skills </LabelSection>
      <LabelNormal class="mt20 appear-up">
        Photograph
        <br />Retouch <br />Art Direction <br />HTML/CSS/Javascript(ES6)
        <br />Vue.js <br />jQuery
      </LabelNormal>
    </section>
    <section class="wrapper position-title">
      <LabelSection class="appear-up"> SNS & Media </LabelSection>
      <div class="logo-wrapper mt40 appear-up">
        <LogoMedia
          v-for="(social, i) in socials"
          :key="i"
          :path="social.path"
          :link="social.link"
        />
      </div>
      <div class="wrapper mt40 appear-up">
        <LabelNormal v-for="(media, i) in medias" :key="i">
          <a :href="media.link" class="link-nomal" target="_blank">{{
            media.title
          }}</a>
        </LabelNormal>
      </div>
    </section>
  </TheDefaultView>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

import TheDefaultView from '@components/templates/TheDefaultView'
import ImageCircle from '@components/atoms/ImageCircle'
import LabelSection from '@components/atoms/LabelSection'
import LabelNormal from '@components/atoms/LabelNormal'
import LogoMedia from '@components/atoms/LogoMedia'

import { setIntersectionObserver } from 'utils/revealObserver'

const medias = [
  {
    title: 'OneEyeLand',
    link: 'https://oneeyeland.com/member/member_portfolio.php?pgrid=107158',
  },
  {
    title: '1X.com',
    link: 'https://1x.com/member/koudaiishigame',
  },
  {
    title: 'PhotoVogue',
    link: 'http://www.vogue.it/photovogue/myportfolio/?id=0B9D2B3B-3F81-41B4-9866-B0A3BC03CF14',
  },
  {
    title: 'VALU',
    link: 'https://valu.is/kodai2100',
  },
]

const socials = [
  {
    path: '/svg/LogoFacebook.svg',
    link: 'https://www.facebook.com/koudai.ishigame',
  },
  {
    path: '/img/LogoTwitter.png',
    link: 'https://twitter.com/TVK382',
  },
  {
    path: '/img/LogoInstagram.png',
    link: 'https://www.instagram.com/koudai_ishigame/?hl=ja',
  },
  {
    path: '/img/LogoQiita.png',
    link: 'https://qiita.com/isihigameKoudai',
  },
  {
    path: '/img/LogoGithub.png',
    link: 'https://github.com/isihigameKoudai',
  },
]

export default defineComponent({
  name: 'ProfileTemplate',
  components: {
    TheDefaultView,
    ImageCircle,
    LabelSection,
    LogoMedia,
    LabelNormal,
  },
  setup() {
    onMounted(() => {
      if (process.browser) {
        const options = {
          threshold: 1.0,
        }

        const clientHeight = document.documentElement.clientHeight
        const callBack = (entry) => {
          const rect = entry.target.getBoundingClientRect()
          if (clientHeight > rect.top) {
            entry.target.classList.add('on')
          }
        }

        setIntersectionObserver('.appear-up', options, callBack)
        setIntersectionObserver('.appear', options, callBack)
      }
    })

    return {
      medias,
      socials,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/page.scss';
@import '~/assets/css/animation.scss';

.link-nomal {
  position: relative;
  text-decoration: none;
  color: #402c2c;
  transition: filter 0.2s;
  filter: drop-shadow(1px 1px 1px #808080f0);
  &:hover {
    filter: drop-shadow(3px 3px 2px #808080f0);
  }

  &:not(:first-child) {
    margin-left: 10px;
    padding-left: 17px;

    &::before {
      content: '/';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
  }
}
.area-profile-left,
.area-profile-right {
  display: inline-block;
  vertical-align: top;
}

.area-profile-left {
  width: 40%;
  height: auto;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.area-profile-right {
  width: 58%;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
  }
}

.position-img-profile {
  display: inline-block;
}

.logo-wrapper {
  width: 640px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>
