<template>
  <default-view title="Plan">
    <section class="position-title mt100">
      <label-nomal
        :font-size="24"
        class="position-title appear-up"
      >
        各種料金
      </label-nomal>
      <div class="container">
        <ul class="table-container mt50">
          <!-- header of table -->
          <li class="row title">
            項目
          </li>
          <li class="row title">
            料金
          </li>
          <li class="row title">
            内容
          </li>
          <!-- content of table -->
          <li class="row title">
            Portrait
          </li>
          <li class="row title">
            ３万円〜
          </li>
          <li class="row taL">
            <p class="label-nomal">
              ・撮影時間：１時間程度
            </p>
            <p class="label-nomal">
              ・枚数：３０〜４０程度
            </p>
            <p class="label-nomal">
              ・撮影場所：屋外、スタジオ撮影対応
            </p>
            <p class="label-nomal">
              ・内容：全データレタッチ込
            </p>
          </li>
          <li class="row title">
            Creative
          </li>
          <li class="row title">
            １０万円〜
          </li>
          <li class="row taL">
            <p class="label-nomal">
              ・撮影時間：３時間〜（メイク、セッティング等時間含む）
            </p>
            <p class="label-nomal">
              ・枚数：３０〜４０枚程度
            </p>
            <p class="label-nomal">
              ・撮影場所：スタジオ
            </p>
            <p class="label-nomal">
              ・内容：ヘアメイク、メイク、衣装、空間デザイン、全データレタッチ込
            </p>
            <p class="label-nomal">
              ※ 撮影規模が大きくなる場合は、別途ご相談にて承ります。
            </p>
          </li>
          <li class="row ttile">
            Web works
          </li>
          <li class="row" />
          <li class="row label-nomal taL">
            お問い合わせ、またはご相談にて承ります。
          </li>
        </ul>
      </div>
    </section>
    <section class="position-title">
      <nuxt-link to="/contact">
        <Button>Contact</Button>
      </nuxt-link>
      <label-nomal class="mt70">
        SNSのDM（ダイレクトメッセージ）
        <br class="pc-dn">からもご連絡可能です。
      </label-nomal>
      <div class="logo-wrapper mt70">
        <logo-media
          v-for="(social, i) in socials"
          :key="i"
          :path="social.imagePath"
          :link="social.link"
        />
      </div>
    </section>
  </default-view>
</template>

<script>
import Button from '@components/atoms/Button'
import DefaultView from '@components/templates/DefaultView'
import LabelNomal from '@components/atoms/LabelNomal'
import LogoMedia from '@components/atoms/LogoMedia'

export default {
  name: 'Plan',
  components: {
    DefaultView,
    LogoMedia,
    LabelNomal,
    Button
  },
  data() {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/util.scss';

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

.container {
  width: 768px;
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
}

.table-container {
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 20% 20% 1fr;
  border: 1px solid #ccc;

  @media screen and (max-width: 768px) {
    grid-template-columns: 30% 30% 40%;
  }

  .row {
    padding: 15px;
    box-sizing: border-box;
    line-height: 1.6;
    letter-spacing: 2px;
    border: 1px solid #ccc;

    &.title {
      display: grid;
      align-items: center;
    }
  }
}

.label-nomal {
  font-size: 16px;
  color: #402c2c;
  font-family: 'HG明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 2.5px;
}
</style>
