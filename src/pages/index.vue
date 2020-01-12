<template>
  <div>
    <div class="top-container">
      <swiper :options="swiperOption" class="appear">
        <swiper-slide v-for="(image, key) in images" :key="key">
          <img :alt="image.alt" :src="image.path" class="main-visual" />
        </swiper-slide>
      </swiper>
      <img
        class="title-position appear"
        src="/svg/title_white.svg"
        alt=""
        width="200px"
      />
      <div class="arrow" @click="moveScroll">
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
    <TheDefaultView id="top" title="Works">
      <LabelSection class="position-title">
        Concept
      </LabelSection>
      <LabelNormal :font-size="24" class="position-title appear-up">
        <span class="sp-dn">「</span>Make Bright All The People<br
          class="pc-dn"
        />
        - 全ての人を輝かせる -<span class="sp-dn">」</span>
      </LabelNormal>
      <div class="position-title">
        <LabelNormal class="mt20 appear-up">
          上記ビジョンのもと、<br />
          モノづくりを通して<br />
          みなさんが少しでも<br />
          前に進むため<br />
          そして,<br />
          その起爆剤になれるよう<br />
          活動していきます。
        </LabelNormal>
        <LabelNormal class="mt20 appear-up">
          何を実現しようか、<br />
          どんな世界観にしようか、<br />
          どうやって作ろうか、
        </LabelNormal>
        <LabelNormal class="mt20 appear-up">
          共感やワクワクから始まる、<br />
          モノづくりやクリエイティブを<br />
          全力で応援していきます。
        </LabelNormal>
      </div>
      <!-- Photograph Works -->
      <title-parallax
        class="mt90"
        path="/img/TitlePhotograph.jpg"
        title="Photograph"
      />
      <section class="wrapper area-content mt90">
        <div class="area-content-works">
          <LabelSection class="appear-up">
            Creative
          </LabelSection>
          <LabelNormal class="mt20 appear-up">
            創作、クリエイティブ、作り込みなど<br />
            背景や衣装・ドレス、メイクからヘアメイクまで<br />
            トータルでご準備し、<br />
            ストーリー・コンセプトなど世界観を<br />
            決めていき制作にあたります。
          </LabelNormal>
          <LabelNormal class="mt20 appear-up">
            他では真似できないような<br />
            世界観を作り出します。
          </LabelNormal>
        </div>
        <image-box
          :shadow="true"
          class="sp-space appear"
          path="/img/worksCreative.jpg"
        />
      </section>

      <section class="wrapper area-content mt90">
        <image-box
          :shadow="true"
          class="sp-dn appear"
          path="/img/worksPortrait.jpg"
        />
        <div class="area-content-works">
          <LabelSection class="appear-up">
            Portrait
          </LabelSection>
          <LabelNormal class="mt20 appear-up">
            手軽な人物・プロフィールの撮影から<br />
            結婚式の前撮りなど<br />
            雰囲気のあるお写真まで<br />
            ご対応します。<br />
          </LabelNormal>
          <LabelNormal class="mt20 appear-up">
            日常の何気ない瞬間も<br />
            記念になるような時も<br />
            永遠に残る<br />
            色褪せない思い出にしていきます。
          </LabelNormal>
        </div>
        <image-box
          :shadow="true"
          class="pc-dn sp-space appear"
          path="/img/worksPortrait.jpg"
        />
      </section>

      <section class="wrapper area-content mt90">
        <div class="area-content-works">
          <LabelSection class="appear-up">
            Media & Report
          </LabelSection>
          <LabelNormal class="mt20 appear-up">
            宣伝商材やHP素材、Webメディアや記事の<br />
            ための写真などをご提供いたします。<br />
            また、音楽CDのアルバムジャケットなど<br />
            フォーマルなものだけでなく<br />
            アーティスティックなものもご対応いたします。<br />
          </LabelNormal>
          <LabelNormal class="mt20 appear-up">
            表現したいもの<br />
            伝えたいことは<br />
            今、伝えて行きましょう
          </LabelNormal>
        </div>
        <image-box
          :shadow="true"
          class="sp-space appear"
          path="/img/worksMediaReport.jpg"
        />
      </section>

      <section class="wrapper mt100 taC">
        <BaseButton title="Contact" @click="onPushRoute('contact')" />
        <LabelNormal class="mt30">
          お問い合わせはこちらから
        </LabelNormal>
      </section>

      <!-- Web Works -->
      <title-parallax
        class="mt90"
        path="/img/TitleWebDevelop.jpg"
        title="Web Works"
      />
      <section class="wrapper area-content vertical-top">
        <div class="area-content-works mt90">
          <LabelSection class="appear-up">
            HTML/CSS Coding
          </LabelSection>
          <image-box
            :is-small="true"
            class="mt30 sp-dn appear"
            path="/img/webCoding.jpg"
          />
          <LabelNormal class="mt20 appear-up">
            各種サービス、Webサイト、<br />
            HP、Webアプリにおける<br />
            小〜中規模なHTML/CSSの<br />
            コーディングをいたします。
          </LabelNormal>
          <image-box
            :is-small="true"
            class="mt30 pc-dn sp-space appear"
            path="/img/webCoding.jpg"
          />
        </div>
        <div class="area-content-works mt90">
          <LabelSection class="appear-up">
            WebApp Develop
          </LabelSection>
          <image-box
            :is-small="true"
            class="mt30 sp-dn appear"
            path="/img/webApp.jpg"
          />
          <LabelNormal class="mt20 appear-up">
            Web上で動くアプリやサイトの<br />
            フロントエンド開発を行います。<br />
            Vue.js,Nuxt.jsなどを取り入れた<br />
            モダンな開発で進めて行きます。
          </LabelNormal>
          <image-box
            :is-small="true"
            class="mt30 pc-dn sp-space appear"
            path="/img/webApp.jpg"
          />
        </div>
      </section>
      <section class="wrapper mt100 taC">
        <BaseButton title="Contact" @click="onPushRoute('contact')" />
        <LabelNormal class="mt30">
          お問い合わせはこちらから
        </LabelNormal>
      </section>
    </TheDefaultView>
  </div>
</template>

<script>
import $ from 'jquery'
import TheDefaultView from '@components/templates/TheDefaultView'
import LabelSection from '@components/atoms/LabelSection'
import LabelNormal from '@components/atoms/LabelNormal'
import TitleParallax from '@components/atoms/TitleParallax'
import ImageBox from '@components/atoms/ImageBox'
import BaseButton from '@components/atoms/BaseButton'

import { setParallax } from '~/utils/parallax'
import { setIntersectionObserver } from '~/utils/revealObserver'

export default {
  name: 'Index',
  components: {
    TheDefaultView,
    LabelSection,
    LabelNormal,
    TitleParallax,
    ImageBox,
    BaseButton
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 3000,
          stopOnLast: false,
          disableOnInteraction: false
        },
        effect: 'fade'
      },
      images: [
        {
          path: '/img/top/mainImage01.jpg',
          alt: 'creative'
        }
      ]
    }
  },
  mounted() {
    if (process.browser) {
      this.setObserver()
      setParallax()
    }
  },
  methods: {
    moveScroll() {
      if (process.browser)
        $('html,body').animate({ scrollTop: window.innerHeight }, 700, 'swing')
    },
    onPushRoute(e = '/') {
      this.$router.push({ path: e })
    },
    setObserver() {
      const options = {
        threshold: 1.0
      }

      const clientHeight = document.documentElement.clientHeight
      const callBack = entry => {
        const rect = entry.target.getBoundingClientRect()
        if (clientHeight > rect.top) {
          entry.target.classList.add('on')
        }
      }

      setIntersectionObserver('.appear-up', options, callBack)
      setIntersectionObserver('.appear', options, callBack)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/animation.scss';
@import '~/assets/css/page.scss';

.top-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.title-position {
  position: absolute;
  top: 50%;
  left: 10vw;
  transform: translate3d(0, -50%, 0);
  filter: drop-shadow(4px 4px 4px #888);
  z-index: 10;
}

.main-visual {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(97%);
}

.arrow {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: transparent;
  border: solid 2px #fff;
  transition-duration: 0.1s;
  filter: drop-shadow(2px 2px 2px #402c2caa);
  z-index: 1;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;

    & > span {
      position: absolute;
      height: 2px;
      background-color: #fff;
      transition-duration: 0.1s;

      &:first-child {
        bottom: 15px;
        left: 38%;
        width: 15px;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:nth-child(2) {
        top: 50%;
        left: 50%;
        width: 25px;
        transform: translate(-50%, -50%) rotate(90deg);
      }
      &:last-child {
        bottom: 15px;
        right: 2%;
        width: 16px;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  &:hover {
    filter: drop-shadow(3px 3px 2px #402c2caa);
    & > div > span {
      filter: drop-shadow(3px 3px 2px #402c2caa);
    }
  }
}

.area-content-works {
  width: 480px;
  height: auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
}

@media screen and (min-width: 769px) {
  .area-content > * {
    display: inline-block;
    vertical-align: middle;
  }
  .area-content.vertical-top > * {
    vertical-align: top;
  }
}

.area-content .sp-space {
  @media screen and (max-width: 768px) {
    margin-top: 90px;
  }
}
</style>
